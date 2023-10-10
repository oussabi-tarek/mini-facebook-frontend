import { useForm } from "react-hook-form";
import ButtonSubmitForm from "../utils/ButtonSubmitForm";
import { useContext } from "react";
import authContext from "../../context/AuthContextProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type RegisterInputs = {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}
const API_URL="http://localhost:8081/";
export default function SignUpForm(){
    const {register, handleSubmit} = useForm<RegisterInputs>();
    const authenticationContext = useContext(authContext);
    const navigate = useNavigate();
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
        const response = await axios.post(API_URL+"/auth/register",requestBody,config);
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