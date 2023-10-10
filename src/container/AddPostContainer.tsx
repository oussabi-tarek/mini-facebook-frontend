import { useState } from "react";
import AddPost from "../components/addPost/AddPost";
import PopupAddPost from "../components/addPost/PopupAddPost";
import useInsertPost from "../hooks/post/useInsertPost";
import { mapImage, mapTags } from "../mappers/mappers";

export const AddPostContainer = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const {insertPostMutation}=useInsertPost();
    
    const addPostClick = () => {
        setShowPopup(true);
    }
    const closePopupClick = () => {
        setShowPopup(false);
    }
    const savePostClick = () => {
        setShowPopup(false);
        const tags=content.split(" ").filter(word=>word.startsWith("#"));
        console.log(tags);
        insertPostMutation.mutate({userId:'65140e65af6c4553738705f7',content:content,image:image});
    }
    const changeContent = (e:any) => {
        setContent(e.target.value);
    }
    const changeImage=(event:any)=>{
      setImage(event.target.files[0]);
    }
  return(
    <>
    <AddPost addPostClick={addPostClick}/>
    {
    showPopup && <PopupAddPost content={content} image={image!} changeContent={changeContent} changeImage={changeImage}
     closePopupClick={closePopupClick} savePostClick={savePostClick} /> 
    }
    </>
  )
}