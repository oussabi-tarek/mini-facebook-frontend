import { useContext, useEffect, useState } from "react";
import { colors } from "../colors";
import { CardContainerProps } from "../types/post/Types";
import useDeleteLike from "../hooks/like/useDeleteLike";
import useDeleteUnLike from "../hooks/unLike/useDeleteUnLike";
import useInsertLike from "../hooks/like/useInsertLike";
import useInsertUnLike from "../hooks/unLike/useInsertUnLike";
import useInsertComment from "../hooks/comment/useInsertComment";
import Card from "../components/post/Card";
import authContext from "../context/AuthContextProvider";


export const CardContainer=(props:CardContainerProps)=>{
    const [isVisible,setIsVisible]=useState(false);
    const [likeColor,setLikeColor]=useState("");
    const [comment,setComment]=useState('');
    const [unlikeColor,setUnlikeColor]=useState("");
    const {deleteLikeMutation} =useDeleteLike();
    const {deleteUnLikeMutation} =useDeleteUnLike();
    const {insertLikeMutation} =useInsertLike();
    const {insertUnLikeMutation}=useInsertUnLike();
    const {insertCommentMutation}=useInsertComment();

     const userId =useContext(authContext).authState.userId ??  "651986c46a089e4b7139f172";

    useEffect(()=>{
       // if props.post.likes contains the current user id, set the likeColor to colors.TEXT_BLUE_600
       props.post.likes.forEach(like=>{
              if(like.userId===userId){
                setLikeColor(colors.TEXT_BLUE_600);
              }
            })
       // if props.post.unLikes contains the current user id, set the unlikeColor to colors.TEXT_RED_600
       props.post.unLikes.forEach(unlike=>{
        console.log("unlike.userId:"+userId);
            if(unlike.userId==="65140e65af6c4553738705f7"){
                
              setUnlikeColor(colors.TEXT_RED_600);
            }
       })       
    
    },[])

    const formatContent = (content:string) => {
        const regex = /#(\w+)/g;
        const regex2 = /(https?:\/\/[^\s]+)/g;
        const tagparts = content.match(regex); // Use match to find all hashtags
        const linkparts = content.match(regex2); // Use match to find all links
        console.log("linkparts:"+linkparts);

        if (!tagparts) {
          return <span>{content}</span>; // Return the content as-is if there are no hashtags
        }
      
        const formattedContent = content.split(regex).map((part, index) => {
            part="#"+part;  
          console.log("part:"+part);  
          if (tagparts!==null && tagparts.includes(part)) {
            // If the part is a hashtag, apply a different style
            return (
              <span key={index} className="text-yellow-500">
                {part}
              </span>
            );
          } else {
            part=part.substring(1);
            if(part.match(regex2)){
                console.log("part.match(regex2):"+part.match(regex2));
                return (
                    <a key={index} href={part}  className="text-blue-500 border-b-2 border-indigo-500">
                      {part}
                    </a>
                  );
              }
            else
               return <span key={index}>{part}</span>;
          }
          

        });
        
      
        return formattedContent;
      };
      

    const changeVisibility=()=>{
        isVisible ? setIsVisible(false) : setIsVisible(true);
    }
    const getImageFromBytes=(imageBytes:string)=>{
        return "data:image/jpeg;base64,"+imageBytes;
    }

    const changelikeColor=(postId:string)=>{
        if(likeColor===""){
            setLikeColor(colors.TEXT_BLUE_600) ;
            props.post.likes.push({id:"",userId:"65140e65af6c4553738705f7",postId:postId});
            insertLikeMutation.mutate({postId:postId,userId:"65140e65af6c4553738705f7"});
            if(unlikeColor!==""){
                setUnlikeColor("");
                console.log("getUnLikeId:");
                deleteUnLikeMutation.mutate(getUnLikeId("65140e65af6c4553738705f7"));
                // delete the unlike with this id from the array props.post.unLikes
                const newUnLikes=props.post.unLikes.filter((unLike)=>
                    unLike.id!==getUnLikeId("65140e65af6c4553738705f7")
                )
                props.post.unLikes=newUnLikes;
            }
        }
        else{
            setLikeColor("");
            deleteLikeMutation.mutate(getLikeId("65140e65af6c4553738705f7"));
            props.post.likes.pop();
        } 
        
    }
    const changeUnlikeColor=(postId:string)=>{
        if(unlikeColor===""){
            setUnlikeColor(colors.TEXT_RED_600) ;
            props.post.unLikes.push({id:"",userId:"65140e65af6c4553738705f7",postId:postId});
            insertUnLikeMutation.mutate({postId:postId,userId:"65140e65af6c4553738705f7"});
            if(likeColor!==""){
                setLikeColor("");
                deleteLikeMutation.mutate(getLikeId("65140e65af6c4553738705f7"));
                // delete the unlike with this id from the array props.post.unLikes
                const newLikes=props.post.likes.filter((like)=>
                    like.id!==getLikeId("65140e65af6c4553738705f7")
                )
                props.post.likes=newLikes;
            }
        }
         else{
            setUnlikeColor("");
            deleteUnLikeMutation.mutate(getUnLikeId("65140e65af6c4553738705f7"));
            props.post.unLikes.pop();
         }
        setLikeColor("");
    }
    const addComment=()=>{
        if(comment!==""){ 
        insertCommentMutation.mutate({postId:props.post.id,userId:"65140e65af6c4553738705f7",comment:comment});
        setComment("");    
        }
        }

     const getLikeId=(userId:string)=>{
        const like=props.post.likes.find(like=>like.userId===userId);
        if(like){
            return like.id;
        }
        return "";
     }
     const getUnLikeId=(userId:string)=>{
        const unlike=props.post.unLikes.find(unlike=>unlike.userId===userId);
        if(unlike){
            return unlike.id;
        }
        return "";
     }
     const chnageComment=(event:any)=>{
        setComment(event.target.value);
     }
    
    const getElapsedTime=(date:string)=>{
        const now=Date.now();
        const createdAt=new Date(date).getTime();
        const elapsedTime=now-createdAt;
        const hours=elapsedTime/3600000;
        if(hours>24){
            return Math.floor(hours/24)+" days";
        }
        if(hours<1){
            return Math.floor(hours*60)+" minutes";
        }
        return Math.floor(hours)+" hours";
    }

    return(
      <Card isVisible={isVisible} likeColor={likeColor} unlikeColor={unlikeColor} 
         formatContent={formatContent}
       changeLikeColor={changelikeColor} changeUnlikeColor={changeUnlikeColor} comment={comment}
       changeComment={chnageComment} addComment={addComment} getImageFromBytes={getImageFromBytes}
       changeVisibility={changeVisibility}  post={props.post} getElapsedTime={getElapsedTime} isProfile={props.isProfile}/>
    )
}