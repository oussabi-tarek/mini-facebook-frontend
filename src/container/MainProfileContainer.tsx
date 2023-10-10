import PostProfile from "../components/profile/postProfile";
import { AddPostContainer } from "./AddPostContainer";

const MainProfile = () => {

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
                <PostProfile/>
            </div>
        </div>
        
        </>
    )
}
export default MainProfile;