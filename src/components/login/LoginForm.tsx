import ButtonSubmitForm from "../utils/ButtonSubmitForm";

export default function LoginForm(){

    return(
        <form className="w-full max-w-sm mb-12">
            <div className="flex items-center border-b border-gray-500 py-2 mb-5">
                <input 
                    className="appearance-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Email"/>
            </div>
            <div className="flex items-center border-b border-gray-500 py-2 mb-5">
                <input 
                    className="appearance-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
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