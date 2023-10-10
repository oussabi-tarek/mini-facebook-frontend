import { useEffect, useState } from "react";
import NavBar from "../components/navBar/Navbar";
import { AddPostContainer } from "./AddPostContainer";
import useGetPosts from "../hooks/post/useGetPosts";
import { CardContainer } from "./CardContainer";


export const HomeContainer = () => {
    
  const [search, setSearch] = useState<string>("");
  const changeSearch = (search: string) => {
        setSearch(search);
        console.log(search);  
   }
  const { status, posts, error } = useGetPosts(search);
  
  return(
    <>
    <NavBar search={search} changeSearch={changeSearch} />
    <div className='flex flex-col items-center pl-20 pr-20 dark:bg-black'>
    <AddPostContainer/>
    {
            posts.map((post,index)=>{
             return <CardContainer key={index}  post={post} />
            })
    }
    </div>
    </>
  )
}