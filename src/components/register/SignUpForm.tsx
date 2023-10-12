import { useForm } from "react-hook-form";
import ButtonSubmitForm from "../utils/ButtonSubmitForm";
import { useNavigate } from "react-router-dom";
import { ENDPOINTS } from "../../hooks/endpoint";
import { RegisterInputs } from "../../types/Types";
import axios from "axios";
import {useState} from "react";

export default function SignUpForm(){
    const {register, handleSubmit, formState, getValues} = useForm<RegisterInputs>();
    const navigate = useNavigate();
    const [profileImage, setProfileImage] = useState("");
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_VITE_API_BASE_URL,
      });

      const handleImageUpload = (event : React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if(file){
            const reader = new FileReader();
            reader.onload = () => {
                if(reader.result) {
                    setProfileImage(reader.result.toString());
                }
            };
            reader.readAsDataURL(file);
        }
      };
    const onSubmit = async (data: RegisterInputs) => {
        const form = new FormData();
        form.append("firstName", data.firstName);
        form.append("lastName", data.lastName);
        form.append("email", data.email);
        form.append("password", data.password);
        form.append("image", data.image[0]);
        form.append("localisation", data.localisation);
        form.append("bibliographie", data.bibliographie);
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        const response = await axiosInstance.post(ENDPOINTS.REGISTER,form,config);
        if(response.status === 200){
            console.log(response.data);
            navigate("/login");
        }
    }

    return(
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full p-6 mb-5 max-w-screen-md mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                <div className="flex flex-col">
                    <input
                        {...register("firstName", {
                            required:{value: true, message: "First name is required"}
                        })}
                        className={`input-field rounded border ${formState.errors.firstName?`border-red-500`:`border-gray-400`}`}
                        type="text"
                        placeholder="First name"/>
                    <p className="text-red-500">{formState.errors.firstName?.message}</p>
                </div>
                <div className="flex flex-col">
                    <input
                        {...register("lastName", {
                            required:{value: true, message: "Last name is required"},
                        })}
                        className={`input-field rounded border ${formState.errors.lastName?`border-red-500`:`border-gray-400`}`}
                        type="text"
                        placeholder="Last name"/>
                    <p className="text-red-500">{formState.errors.lastName?.message}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                <div className="flex flex-col">
                    <input
                        {...register("username",{
                            required:{value: true, message: "Username is required"},
                        })}
                        className={`input-field rounded border ${formState.errors.username?`border-red-500`:`border-gray-400`}`}
                        type="text"
                        placeholder="Username"/>
                    <p className="text-red-500">{formState.errors.username?.message}</p>
                </div>
                <div className="flex flex-col">
                    <input
                        {...register("email", {
                            required:{value: true, message: "Email is required"},
                            pattern:{value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: "Invalide email format"}}
                        )}
                        className={`input-field rounded border ${formState.errors.email?`border-red-500`:`border-gray-400`}`}
                        type="email"
                        placeholder="Email"/>
                    <p className="text-red-500">{formState.errors.email?.message}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                <div className="flex flex-col">
                    <input
                        {...register("password", {
                            required:{value: true, message: "Password is required"},
                            minLength: {value: 6, message: "Password must be at least 6 characters"}
                        })}
                        className={`input-field rounded border ${formState.errors.password?`border-red-500`:`border-gray-400`}`}
                        type="password"
                        placeholder="Password"/>
                    <p className="text-red-500">{formState.errors.password?.message}</p>
                </div>
                <div className="flex flex-col">
                    <input
                        {...register("confirmPassword",{
                            required: {value: true, message: "Password confirmation is required"},
                            validate: value => value === getValues("password") || 'Passwords not match',
                        })}
                        className={`input-field rounded border ${formState.errors.password?`border-red-500`:`border-gray-400`}`}
                        type="password"
                        placeholder="confirm password"/>
                    <p className="text-red-500">{formState.errors.confirmPassword?.message}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                <div className="flex flex-col">
                    <input
                        {...register("localisation",{
                            required:{value: true, message: "Localisation is required"},
                        })}
                        className={`input-field rounded border ${formState.errors.localisation?`border-red-500`:`border-gray-400`}`}
                        type="text" 
                        placeholder="Localisation"/>
                    <p className="text-red-500">{formState.errors.localisation?.message}</p>
                    <div className="mb-3 md:mr-3">
                        <label htmlFor="profileImage" className="block text-gray-500 font-medium mb-1">
                            Profile Image
                        </label>
                        <input
                            type="file"
                            id="profileImage"
                            accept="image/*"
                            className="p-2 text-transparent"
                            {...register("image")}
                            onChange={handleImageUpload}
                        />
                        <div className="mb-3">
                            <img
                                src={profileImage}
                                alt="Image Profile"
                                className="w-16 h-16 border border-gray-500 md:w-24 md:h-24 lg:w-32 lg:h-32 object-cover rounded-full"
                            />
                        </div>
                    </div>
                </div>
                    <div className="flex flex-col">
                            <textarea
                                {...register("bibliographie", {
                                    required:{value: true, message: "Bibliography is required"},
                                })}
                                rows={9}
                                className={`input-field rounded border ${formState.errors.bibliographie?`border-red-500`:`border-gray-400`}`}
                                placeholder="Bibliography .."/>
                            <p className="text-red-500">{formState.errors.bibliographie?.message}</p>
                    </div>                
            </div>
            
            <ButtonSubmitForm textButton={"SIGN UP"}/>
        </form>
    )
}