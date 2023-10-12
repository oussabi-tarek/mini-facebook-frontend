import "../../styles/PopupEditProfile.css"
import { PopupDeleteProps} from "../../types/post/Types";

const PopupDeletePost = (props: PopupDeleteProps ) => {
    
    const deleteConfirm = () => {
        props.submitDelete(props.postToDelete);
        props.handlePopup();
    }


    return(
    <div className="fixed inset-0 flex items-center justify-center z-50 mt-12 ">
      <div className="custom-popup bg-white rounded-xl shadow-lg p-3 ">
        <div className='relative'>
             <div className="mb-12 child p-12">
                <div className="flex flex-col">
                    <div className="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                       <div>
                            <span className="font-medium">Danger alert!</span> Are You Sure You want to delete this Post ?.
                        </div>
                    </div>
                    <div className="flex items-end p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                            <button type="button" onClick={props.handlePopup} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Cancel</button>
                            <button type="button" onClick={deleteConfirm} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Confirm</button>
                    </div>
                </div>
              
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
export default PopupDeletePost;