import React, {
  createContext,
  useReducer,
  useCallback,
  useEffect,
  useState,
} from "react";
import authReducer, { AuthState, defaultAuthState } from "./authReducer";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthActionEnum } from "./authActions";
import axios from "axios";
import LoginPage from "../components/login/LoginPage";
import SignUpPage from "../components/register/SignUpPage";

type AuthProviderProps = {
  children : React.ReactElement;
}

export type UserData = {
  authToken: string;
  refreshToken: string;
  userId: string;
  name: string;
  email: string;
};

export interface AuthContext {
  authState: AuthState;
  globalLogInDispatch: (props: UserData) => void;
  globalLogOutDispatch: () => void;
}
// create authentication context
const authContext = createContext<AuthContext>({
  authState: defaultAuthState,
  globalLogInDispatch: () => {},
  globalLogOutDispatch: () => {}
});
const API_URL="http://localhost:8081/"
export const AuthContextProvider = (props: AuthProviderProps)=>{
    const {children} = props;
    const [authState, authDispatch] = useReducer(authReducer, defaultAuthState);
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const path = window.location.pathname;
    console.log("PATH "+path);
    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
          const userData: UserData = JSON.parse(user);
          console.log(userData);
          const formData = new URLSearchParams();
          formData.append("token", userData.authToken);
          const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
          };
          const validateToken = async () => {
            let response = await axios.post(API_URL+"auth/validateToken",formData.toString(),config);
            console.log(response.data);
            if(response.status === 200){
              console.log("is active : " + response.data.active);
              if(response.data.active) {
                authDispatch({ type: AuthActionEnum.LOG_IN, payload: userData });
                setIsAuthenticated(response.data.active);
              }else{
                navigate("/login");
              }
            }
            else{
              navigate("/login");
            }
         };
         validateToken();
        }
      }, []);
    const globalLogInDispatch = useCallback(
      (props: UserData) => {
        const { authToken, refreshToken, email, name, userId } = props;
        authDispatch({
          type: AuthActionEnum.LOG_IN,
          payload: {
            authToken,
            refreshToken,
            userId,
            name,
            email,
          },
        });
        navigate("/");
        console.log("LOGIN DISPATCH");
        console.log(props);
      },
      [navigate]
  );
  const globalLogOutDispatch = useCallback(() => {
      authDispatch({ type: AuthActionEnum.LOG_OUT, payload: null });
      navigate("/login");
  }, [navigate]);
  const context = {
      authState,
      globalLogInDispatch,
      globalLogOutDispatch
  };
  
  return (
    <authContext.Provider value={context}>
      {isAuthenticated?children:(path==="/signup"?<SignUpPage />:<LoginPage />)}
    </authContext.Provider>)
}
export default authContext;