import AddPost from "./homePage/AddPost";
import Card from "./homePage/Card";
import NavBar from "./navBar/Navbar";


export default function Home(){
    return(
        <>
            <NavBar/>
            <div className='flex flex-col items-center pl-20 pr-20'>
            <AddPost/>
            <Card/>
            </div>
        </>
    )
}
