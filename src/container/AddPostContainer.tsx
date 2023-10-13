import { useContext, useState } from "react";
import AddPost from "../components/addPost/AddPost";
import PopupAddPost from "../components/addPost/PopupAddPost";
import useInsertPost from "../hooks/post/useInsertPost";

import { mapImage, mapTags } from "../mappers/mappers";
import { getAllJSDocTagsOfKind } from "typescript";
import authContext from "../context/AuthContextProvider";

import { SubmitHandler, useForm } from "react-hook-form";
import { AddPostForm } from "../types/Types";

import { Message } from "../components/modal/Message";
import { STATE } from "../states";

export const AddPostContainer = () => {
    const [showPopup, setShowPopup] = useState(false);
    const {insertPostMutation}=useInsertPost();

    const userId = useContext(authContext).authState.userId ??  "";
    const [showMessage, setShowMessage] = useState({show:false, message:"",action:""});
    
    const { register, handleSubmit,formState:{ errors } } =useForm<AddPostForm>();
    const addPostClick = () => {
        setShowPopup(true);
    }
    const closePopupClick = () => {
        setShowPopup(false);
    }

    const savePostClick = () => {
        setShowPopup(false);
        const tags=content.split(" ").filter(word=>word.startsWith("#"));
        // store tags as string separated by comma
        const tagsString=tags.join(",");
        insertPostMutation.mutate({userId:userId , content:content,image:image,tags:tagsString});
    }
    const changeContent = (e:any) => {
        setContent(e.target.value);
    }
    const changeImage=(event:any)=>{
      setImage(event.target.files[0]);
   }
    const onSubmit:SubmitHandler<AddPostForm>=async(data)=>{
      const {content,image}=data; 
      const tags=content.split(" ").filter(word=>word.startsWith("#"));
      const tagsString=tags.join(",");
      setShowPopup(false);
      insertPostMutation.mutate({userId:userId,content:content,image:image,tags:tagsString},{
        onSuccess: () => {
        },
        onError: () => {
          setShowMessage({show:true, message:"Error adding post!Please try again",action:STATE.ERROR});
          setTimeout(()=>{
            setShowMessage({show:false, message:"",action:""});
          },2000);
        },
      });
    }

  return(
    <>
    <AddPost addPostClick={addPostClick}/>
    {
    showPopup && <PopupAddPost onSubmit={onSubmit} errors={errors} handleSubmit={handleSubmit} register={register} 
     closePopupClick={closePopupClick}  /> 
    }
    {
       showMessage.show && <Message action={showMessage.action} message={showMessage.message} />
    }
    </>
  )
}