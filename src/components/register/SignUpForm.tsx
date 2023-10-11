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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                <input
                    {...register("firstName")}
                    className="input-field rounded border border-gray-400"
                    type="text"
                    placeholder="First name"/>
                <input
                    {...register("lastName")}
                    className="input-field rounded border border-gray-400"
                    type="text"
                    placeholder="Last name"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                <input
                    className="input-field rounded border border-gray-400"
                    type="text"
                    placeholder="Username"/>
                <input
                    {...register("email")}
                    className="input-field rounded border border-gray-400"
                    type="email"
                    placeholder="Email"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                <input
                    {...register("password")}
                    className="input-field rounded border border-gray-400"
                    type="password"
                    placeholder="Password"/>
                <input 
                    className="input-field rounded border border-gray-400"
                    type="password"
                    placeholder="confirm password"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                <input 
                    className="input-field rounded border border-gray-400" 
                    type="tel" 
                    placeholder="Number phone +212 666666666"/>
            </div>
            <ButtonSubmitForm textButton={"SIGN UP"}/>
        </form>
    )
}