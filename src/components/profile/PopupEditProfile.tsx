import { useForm } from "react-hook-form";
import { PopupEditUserProps, updateUserInput } from "../../types/profile/Types";
import "../../styles/PopupEditProfile.css"

const PopupEditProfile = (props: PopupEditUserProps) => {
    const {register, handleSubmit} = useForm<updateUserInput>();
    
    const onSubmit = (data: updateUserInput) => {
        props.updateUser(props.user.id, data);
        props.handlePopup();
    }

    return(
    <div className="fixed inset-0 flex items-center justify-center z-50 mt-12 ">
      <div className="custom-popup bg-white rounded-xl shadow-lg p-3 ">
        <div className='relative'>
             <div className="mb-6 child p-9">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">    
                <div className="mb-3">
                    <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                    <input id="firstName" defaultValue={props.user.firstName} {...register("firstName")} className="block w-full bg-black text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="text" />
                </div>  
                <div className="mb-3">
                    <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">last Name</label>
                    <input id="lastName" defaultValue={props.user.lastName} {...register("lastName")} className="block w-full bg-black text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="text" />
                </div> 
                 <div className="mb-3">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">email</label>
                    <input id="email" defaultValue={props.user.email} {...register("email")} className="block w-full bg-black text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="email" />
                </div>  

                <div className="mb-3">
                    <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                    <input id="location" defaultValue={props.user.location} {...register("location")} placeholder="Marrakech, Sidi Abbad" className="block w-full bg-black text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="text" />
                </div>       
                <div className="grid justify-items-end">
                    <button className= "mt-1 mr-1 bg-blue-700 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full" type="submit">
                        Update
                    </button>
                </div>
            </form> 

             </div>
          <div className="absolute top-2 right-14">
          <button
            type="button"
            onClick={props.handlePopup}
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            X
          </button>
          </div>
        </div>
     
      </div>
      </div>
    )

    
}
export default PopupEditProfile;