import PostProfile from "./postProfile";
import ProfileHeader from "./ProfileHeader";

const MainProfile = () => {

    return(
        <>
        <div className="flex flex-col border-1">
            <div className="flex items-center bg-gray-200 p-12 mb-6">
               <ProfileHeader/>
            </div>
            <div className="flex flex-col">
                <PostProfile/>
            </div>
        </div>
        
        </>
    )
}
export default MainProfile;