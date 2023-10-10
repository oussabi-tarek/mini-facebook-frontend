import Button from "../utils/Button";
import HeaderForm from "../utils/HeaderForm";
import RighSideLoginRegister from "../utils/RightSideLoginRegister";
import SignUpForm from "./SignUpForm";

export default function SignUpPage(){
    return(
        <div className="grid grid-cols-2">
            <div className="flex flex-col justify-center items-center">
                <HeaderForm 
                    title={"SIGN UP"}/>
                <SignUpForm />
                <Button 
                    text={"Do you have already an account?"}
                    textButton={"LOGIN"}
                    link={"login"}/>
            </div>
            <RighSideLoginRegister paragraph={"Please create your account"}/>
        </div>
    )
}