import { useForm } from "react-hook-form";
import ButtonSubmitForm from "../utils/ButtonSubmitForm";
import { useNavigate } from "react-router-dom";

import { ENDPOINTS } from "../../hooks/endpoint";
import { RegisterInputs } from "../../types/Types";
import axios from "axios";

export default function SignUpForm(){
    const {register, handleSubmit} = useForm<RegisterInputs>();
    const navigate = useNavigate();
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_VITE_API_BASE_URL,
      });
    const onSubmit = async (data: RegisterInputs) => {
        const requestBody = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password
        }
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await axiosInstance.post(ENDPOINTS.REGISTER,requestBody,config);
        if(response.status === 200){
            console.log(response.data);
            navigate("/login");
        }
    }
    return(
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full p-6 mb-5">
            <div className="flex items-center py-2 mb-3">
                <input
                    {...register("firstName")}
                    className="appearance-none border-b border-gray-500 w-full text-gray-700 mr-3 py-3 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="First name"/>
                <input
                    {...register("lastName")}
                    className="appearance-none border-b border-gray-500 w-full text-gray-700 mr-3 py-3 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Last name"/>
            </div>
            <div className="flex items-center py-2 mb-3">
                <input
                    className="appearance-none border-b border-gray-500 w-full text-gray-700 mr-3 py-3 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Username"/>
                <input
                    {...register("email")}
                    className="appearance-none border-b border-gray-500 w-full text-gray-700 mr-3 py-3 px-2 leading-tight focus:outline-none"
                    type="email"
                    placeholder="Email"/>
            </div>
            <div className="flex items-center py-2 mb-3">
                <input
                    {...register("password")}
                    className="appearance-none border-b border-gray-500 w-full text-gray-700 mr-3 py-3 px-2 leading-tight focus:outline-none"
                    type="password"
                    placeholder="Password"/>
                <input 
                    className="appearance-none border-b border-gray-500 w-full text-gray-700 mr-3 py-3 px-2 leading-tight focus:outline-none"
                    type="password"
                    placeholder="confirm password"/>
            </div>
            <div className="flex items-center py-2 mb-3">
                <input 
                    className="appearance-none border-b border-gray-500 text-gray-700 mr-3 py-3 px-2 leading-tight focus:outline-none" 
                    type="tel" 
                    placeholder="Number phone 0606..."/>
            </div>
            <ButtonSubmitForm textButton={"SIGN UP"}/>
        </form>
    )
}