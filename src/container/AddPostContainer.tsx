import { useContext, useState } from "react";
import AddPost from "../components/addPost/AddPost";
import PopupAddPost from "../components/addPost/PopupAddPost";
import useInsertPost from "../hooks/post/useInsertPost";
import { mapImage, mapTags } from "../mappers/mappers";
import { getAllJSDocTagsOfKind } from "typescript";
import authContext from "../context/AuthContextProvider";

export const AddPostContainer = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const {insertPostMutation}=useInsertPost();

    const userId = useContext(authContext).authState.userId ??  "651986c46a089e4b7139f172";

    
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