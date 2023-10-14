import { useContext, useState } from "react";
import AsideProfile from "../components/profile/AsideProfile";
import authContext from "../context/AuthContextProvider";
import useGetUserPosts from "../hooks/post/useGetUserPosts";
import useGetUser from "../hooks/user/useGetUser";
import useUpdateUser from "../hooks/user/useUpdateUser";
import { updateUserInput } from "../types/profile/Types";
import { Image } from "../types/Types";
import MainProfile from "./MainProfileContainer";
import useGetProfile from "../hooks/user/useGetProfile";
import useUpdateProfile from "../hooks/user/useUpdateProfile";
import PopupPictureProfile from "../components/profile/PopupPictureProfile";

function Profile(){
    const user : any = useContext(authContext)?? ""


    const [popupProfile, setPopupProfile] = useState(false);
    const [profileImage, setProfileImage] = useState<any>("")

    
    const {status, userData, error} = useGetUser(user.authState.userId);

    const {statusProfile, userProfile} = useGetProfile(user.authState.userId);
    const {statusPost, posts} = useGetUserPosts(user.authState.userId);
    const {updateUserMutation} = useUpdateUser();
    const {updateProfileMutation} = useUpdateProfile();

        const userProfilePicture : any =  userProfile ?? [];

    const handlePopup = () => setPopupProfile(!popupProfile);

    const updateUser = (userId: string, user: updateUserInput) => {
        updateUserMutation.mutate({ user, userId });
    }
    const handleUpdateUser = (userId: string, user: updateUserInput) =>{
        updateUser(userId, user);
    }
    const handleUpdateProfile = (event : any) => {
        event.preventDefault();
        updateProfileMutation.mutateAsync({ image: profileImage, userId: user.authState.userId });
    }

   const handleFileChange = (event : any) => {
    console.log("imaggggg:  ", event.target.files?.[0])
        setProfileImage(event.target.files?.[0])
      };
   
   return(
        <>
      
            <div className="relative grid grid-cols-12 ">
                
                <div className="col-span-5">
                    <AsideProfile user={userData} updateUserClick={handleUpdateUser} posts={posts} userProfile={userProfilePicture} status={statusProfile}  handleProfileChange={handlePopup}/>
                </div>
                <div className="col-span-7">
                    <MainProfile user={userData} posts={posts} statusPost={statusPost}/>
                </div>
            </div>
            {popupProfile && (
                <PopupPictureProfile handleFileChange={handleFileChange} submitProfileChange={handleUpdateProfile} handlePopup={handlePopup} />
            )}
        </> 
    )

}

export default Profile;