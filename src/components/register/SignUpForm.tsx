import ButtonSubmitForm from "../utils/ButtonSubmitForm";

export default function SignUpForm(){
    return(
        <form className="w-full p-6 mb-5">
            <div className="flex items-center py-2 mb-3">
                <input 
                    className="appearance-none border-b border-gray-500 w-full text-gray-700 mr-3 py-3 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="First name"/>
                <input 
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
                    className="appearance-none border-b border-gray-500 w-full text-gray-700 mr-3 py-3 px-2 leading-tight focus:outline-none"
                    type="email"
                    placeholder="Email"/>
            </div>
            <div className="flex items-center py-2 mb-3">
                <input 
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