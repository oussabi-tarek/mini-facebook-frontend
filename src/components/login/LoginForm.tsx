import { useForm } from "react-hook-form";
import ButtonSubmitForm from "../utils/ButtonSubmitForm";
import axios from "axios";
import {useNavigate, Navigate} from "react-router-dom";
import { useContext } from "react";
import authContext, { AuthContext } from "../context/AuthContextProvider";

type LoginInputs = {
    email: string,
    password: string
}
const API_URL="http://localhost:8081/"
export default function LoginForm(){
    const {register, handleSubmit} = useForm<LoginInputs>();
    const authenticationContext = useContext(authContext);
    const onSubmit = async (data: LoginInputs) => {
        const formData = new URLSearchParams();
        formData.append('email', data.email);
        formData.append('password', data.password);
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        const response = await axios.post(API_URL+"auth/login",formData.toString(),config);
        if(response.status === 200){
            console.log(response.data);
            const authToken = response.data.auth.access_token;
            const refreshToken = response.data.auth.refresh_token;
            const userId = response.data.user.id;
            const name = response.data.user.lastName +" "+ response.data.user.lastName;
            const email = response.data.user.email;
            const isAuthenticated = true;
            authenticationContext.globalLogInDispatch({authToken,refreshToken,userId,name,email});
        }
    }
    return(
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-sm mb-12">
            <div className="flex items-center py-2 mb-5">
                <input
                    {...register("email")}
                    className="appearance-none border-b border-gray-500 w-full text-gray-500 mr-3 py-3 px-2 leading-tight focus:outline-none"
                    type="email"
                    placeholder="Email"/>
            </div>
            <div className="flex items-center py-2 mb-5">
                <input
                    {...register("password")}
                    className="appearance-none border-b border-gray-500 w-full text-gray-500 mr-3 py-3 px-2 leading-tight focus:outline-none" 
                    type="password" 
                    placeholder="Password"/>
            </div>
            <div
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 mb-8">
                    <a href="#" 
                       className="text-gray-500 hover:underline dark:text-blue-500">
                            Forgot Password?
                    </a>
            </div>
            <ButtonSubmitForm 
                textButton={"LOGIN"}/>
        </form>
    )
}