import { useForm } from "react-hook-form";
import ButtonSubmitForm from "../utils/ButtonSubmitForm";
import axios from "axios";

type LoginInputs = {
    email: string,
    password: string
}
export default function LoginForm(){
    const {register, handleSubmit} = useForm<LoginInputs>();
    const onSubmit = async (data: LoginInputs) => {
        const formData = new URLSearchParams();
        formData.append('email', data.email);
        formData.append('password', data.password);
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        const response = await axios.post("http://localhost:8081/auth/login",formData.toString(),config);
        console.log(response.data);
        localStorage.setItem('access_token',response.data.auth.access_token);
        localStorage.setItem('logged_user', JSON.stringify(response.data.user));
        localStorage.setItem('refresh_token',response.data.auth.refresh_token);
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