import useGetPosts from "../hooks/post/useGetPosts";
import { CardContainer } from "./CardContainer";


export const PostListContainer = () => {
    const { status, posts, error } = useGetPosts();
    

    return (
        <>
         {
            posts.map((post,index)=>{
             return <CardContainer key={index}  post={post}/>
            })
        }
        </>
    );
}
