import { IoMdSend } from "react-icons/io";
import { AddCommentProps } from "../../types/post/Types";

function AddComment(props:AddCommentProps){
  
   return(
    <div className="flex flex-col items-center ml-10">
    <div className='flex flex-row w-full '>
    <input  value={props.comment} onChange={props.changeComment}  type="text" className='w-9/12 mt-2  mb-2 border border-gray-200 rounded-lg shadow  hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700' placeholder='Write a comment...'/>
    <button onClick={props.addComment} className='h-9 w-9 mt-2.5 ml-2 text-black dark:text-white hover:bg-blue-100 border bg-blue-600 border-gray-200 rounded-lg shadow  p-2' ><IoMdSend/></button>
    </div>
    </div>
   )
}

export default AddComment;