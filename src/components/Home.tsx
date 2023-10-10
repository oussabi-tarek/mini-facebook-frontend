import AddPost from "./addPost/AddPost";
import NavBar from "./navBar/Navbar";
import Card from "./post/Card";


export default function Home(){
    return(
        <>
            <NavBar/>
            <div className='flex flex-col items-center pl-20 pr-20'>
            {/*<AddPost/>
            <Card/>*/}
            </div>
        </>
    )
}
