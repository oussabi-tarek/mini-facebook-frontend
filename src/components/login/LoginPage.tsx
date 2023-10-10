import { useContext, useEffect, useState } from "react";
import Button from "../utils/Button";
import HeaderForm from "../utils/HeaderForm";
import RighSideLoginRegister from "../utils/RightSideLoginRegister";
import LoginForm from "./LoginForm";
import { AuthContext } from "../../context/AuthContextProvider";
import {useNavigate, Navigate} from "react-router-dom";

export default function LoginPage(){
    
    return(
        <div className="grid grid-cols-2 h-screen">
            <div className="flex flex-col justify-center items-center h-screen">
                <HeaderForm title={"LOGIN"}/>
                <LoginForm />
                <Button text={"Create an account"} textButton={"SIGN UP"} link={"/signup"}/>
            </div>
            <RighSideLoginRegister 
                paragraph={"Please log in to access your account"}/>
        </div>
    )
}