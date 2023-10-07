import { type } from "os";
import React, {createContext, useState, ReactNode, useEffect} from "react";
import LoginPage from "../login/LoginPage";
import axios from "axios";

interface User{
    id: string,
    firstName: string,
    lastName: string,
    email: string
}
interface AuthContextType {
    access_token: string,
    user: User | null,
    refresh_token: string
}
export const AuthContext = createContext<AuthContextType>({access_token:"",user:null,refresh_token:""});
interface AuthProviderProps {
    children: ReactNode
}
export default function AuthProvider(props:AuthProviderProps){
    const [isAuthenticated, setIsAuthenticated] = useState();
    const [credentials, setCredentials] = useState<AuthContextType>({
        access_token: localStorage.getItem("access_token") || "",
        user: JSON.parse(localStorage.getItem("logged_user")||"") || "{}",
        refresh_token: localStorage.getItem("refresh_token") || ""
    });
    useEffect(()=>{
        const formData = new URLSearchParams();
        console.log("token : "+localStorage.getItem("access_token"));
        formData.append('token', credentials.access_token || "");
        const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        };
        const validateToken = async () => {
            let response = await axios.post("http://localhost:8081/auth/validateToken",formData.toString(),config);
            console.log(response.data);
            setIsAuthenticated(response.data.active);
         };
        validateToken();
    },[])
    return(
        <AuthContext.Provider value={credentials}>
            {isAuthenticated?props.children:<LoginPage />}
        </AuthContext.Provider>
    )
}