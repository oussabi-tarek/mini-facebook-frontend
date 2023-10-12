import { useContext, useState } from "react";
import AddPost from "../components/addPost/AddPost";
import PopupAddPost from "../components/addPost/PopupAddPost";
import useInsertPost from "../hooks/post/useInsertPost";
import { SubmitHandler, useForm } from "react-hook-form";
import { AddPostForm } from "../types/Types";
import authContext from "../context/AuthContextProvider";



export const AddPostContainer = () => {
    const [showPopup, setShowPopup] = useState(false);
    const {insertPostMutation}=useInsertPost();
    const { register, handleSubmit,formState:{ errors } } =useForm<AddPostForm>();
    const userId = useContext(authContext).authState.userId ??  "";   
  
    const addPostClick = () => {
        setShowPopup(true);
    }
    const closePopupClick = () => {
        setShowPopup(false);
    }
    const onSubmit:SubmitHandler<AddPostForm>=async(data)=>{
      const {content,image}=data;
      const tags=content.split(" ").filter(word=>word.startsWith("#"));
      // store tags as string separated by comma
      const tagsString=tags.join(",");
      insertPostMutation.mutate({userId:userId,content:content,image:image,tags:tagsString});
      setShowPopup(false);
    }

  return(
    <>
    <AddPost addPostClick={addPostClick}/>
    {
    showPopup && <PopupAddPost onSubmit={onSubmit} errors={errors} handleSubmit={handleSubmit} register={register} 
     closePopupClick={closePopupClick}  /> 
    }
    </>
  )
}