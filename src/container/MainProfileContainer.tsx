import { Post } from "../types/post/Types";
import { User } from "../types/Types";
import { AddPostContainer } from "./AddPostContainer";
import { CardContainer } from "./CardContainer";
import EDIT from "../images/editMe.png";
import ICONDELETE from "../images/DeleteIcon.png";

const MainProfile = ({user} : {user: User}) => {
    console.log("user: ", user);
    const posts = user ? user.userPosts : [];
    console.log("my post : ", posts);
    return(
        <>
        <div className="flex flex-col border-1">
            <div className="flex items-center bg-gray-200 p-12 mb-6">
                <div className="flex flex-col m-auto">
                    <div className="flex justify-around">
                        <p>What's on your mind today barry ?</p>
                    </div>
                    <div>
                        <AddPostContainer />
                    </div>

                </div>
            </div>
            <div className="flex flex-col">

                 {
                     posts.map((post,index)=>{
                        
                    return(
                        <div key={index} className="relative">
                            <CardContainer post={post}/>
                            <div className="absolute top-0 right-0 m-2 space-x-2">
                                <button className='mr-2' >
                                    <img src={EDIT} alt="edit" className='w-6 h-6' />
                                </button>
                                <button>
                                    <img src={ICONDELETE} alt="delete" className='w-7 h-7 bg-red' />
                                </button>
                            </div>
                        </div>
                    ) 
                    })
                 }
            </div>
        </div>
        
        </>
    )
}
export default MainProfile;