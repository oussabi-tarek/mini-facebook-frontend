import { useForm } from "react-hook-form";
import "../../styles/PopupEditProfile.css"
import { PopupEditPostprops, Post } from "../../types/post/Types";

const PopupEditPost = (props: PopupEditPostprops ) => {
  
    const {register, handleSubmit} = useForm<Post>();
    
    const onSubmit = (data: Post) => {
        props.submitUpdatePost(data);
        props.handlePopup();
    }

    return(
    <div className="fixed inset-0 flex items-center justify-center z-50 mt-12 ">
      <div className="custom-popup bg-white rounded-xl shadow-lg p-3 ">
        <div className='relative'>
             <div className="mb-6 child p-9">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">    
                <div className="mb-3">
                    <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">comment</label>
                    <textarea id="content" defaultValue={props.myPost?.content} {...register("content")} rows={9} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Am Mr X, from ..."></textarea>
                </div>  
                <div className="mb-3">
                    <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
                    <input {...register("images")} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" aria-describedby="user_avatar_help" id="user_avatar" type="file" />

                </div>
               
                <div className="grid justify-items-end">
                    <button className= "mt-1 mr-1 bg-blue-700 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full" type="submit">
                        edit
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
export default PopupEditPost;