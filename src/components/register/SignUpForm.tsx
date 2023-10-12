import { useForm } from "react-hook-form";
import ButtonSubmitForm from "../utils/ButtonSubmitForm";
import { useNavigate } from "react-router-dom";
import { ENDPOINTS } from "../../hooks/endpoint";
import { RegisterInputs } from "../../types/Types";
import axios from "axios";
import {useState} from "react";

export default function SignUpForm(){
    const {register, handleSubmit} = useForm<RegisterInputs>();
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
                <input
                    {...register("localisation")}
                    className="input-field rounded border border-gray-400" 
                    type="text" 
                    placeholder="Localisation"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                <div className="mb-3 md:mr-3">
                    <label htmlFor="profileImage" className="block text-gray-500 font-medium mb-1">
                        Profile Image
                    </label>
                    <input
                        type="file"
                        id="profileImage"
                        accept="image/*"
                        className="p-2 w-full text-transparent"
                        {...register("image")}
                        onChange={handleImageUpload}
                    />
                    {profileImage && <div className="mb-3">
                        <img
                            src={profileImage}
                            alt="Image Profile"
                            className="w-16 h-16 border border-gray-500 md:w-24 md:h-24 lg:w-32 lg:h-32 object-cover rounded-full"
                        />
                    </div>}
                </div>
                <textarea
                    {...register("bibliographie")}
                    className="input-field rounded border border-gray-400"  
                    placeholder="Bibliographie .."/>
            </div>
            <ButtonSubmitForm textButton={"SIGN UP"}/>
        </form>
    )
}