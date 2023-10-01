import { AiOutlinePlus } from "react-icons/ai";

export default function AddPostSearch() {
return(
    <form>
            <div className="flex">                
                <div className="relative w-80 h-4 mb-5">
                    <input  disabled className="block p-2 w-full
                    z-20 text-sm text-gray-900 bg-gray-50 rounded-lg 
                      border-none outline-none
                    dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 
                    dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" 
                    placeholder="Add Post" required />
                    <button type="submit" className="absolute h-9 top-0 right-0 p-2 text-sm 
                    font-medium  text-black  rounded-r-lg 
                      dark:bg-blue-600 dark:hover:bg-blue-700 
                    dark:focus:ring-blue-800">
                        <AiOutlinePlus className="w-4 h-4"/>
                        {/* <span className="sr-only">Search</span> */}
                    </button>
                </div>
            </div>
        </form>
)
}