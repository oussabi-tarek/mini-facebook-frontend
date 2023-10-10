import { useForm } from "react-hook-form";
import ButtonSubmitForm from "../utils/ButtonSubmitForm";
import { useContext } from "react";
import authContext, { AuthContext } from "../../context/AuthContextProvider";
import { useAxios } from "../../hooks/axios/useAxios";
import { LoginInputs } from "../../types/Types";
import {sendLogin} from "../../hooks/login/useLogin";

export default function LoginForm(){
    const {register, handleSubmit} = useForm<LoginInputs>();
    const authenticationContext = useContext(authContext);
    const {axios} = useAxios();
    
    const onSubmit = async (data: LoginInputs) => {
        sendLogin(
            axios,
            authenticationContext,
            {email:data.email, password:data.password});
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