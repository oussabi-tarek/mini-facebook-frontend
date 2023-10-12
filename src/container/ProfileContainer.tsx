import { useContext } from "react";
import AsideProfile from "../components/profile/AsideProfile";
import authContext from "../context/AuthContextProvider";
import useGetUser from "../hooks/user/useGetUser";
import useUpdateUser from "../hooks/user/useUpdateUser";
import { updateUserInput } from "../types/profile/Types";
import { User } from "../types/Types";
import MainProfile from "./MainProfileContainer";


function Profile(){
    const user : any = useContext(authContext)?? "1"
    console.log("userId : ", user.authState.userId);

    const {status, userData, error} = useGetUser(user.authState.userId);
    console.log("userDAta: ", userData)
    const {updateUserMutation} = useUpdateUser();

 const updateUser = (userId: string, user: updateUserInput) => {
  updateUserMutation.mutate({ user, userId });
}
const handleUpdateUser = (userId: string, user: updateUserInput) =>{
    updateUser(userId, user);
}
   
    return(
        <>
            <div className="grid grid-cols-12 border-2">
                <div className="col-span-5">
                    <AsideProfile user={userData} updateUserClick={handleUpdateUser} />
                </div>
                <div className="col-span-7">
                    <MainProfile user={userData}/>
                </div>
            </div>
        </>
    )
// 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
}

export default Profile;