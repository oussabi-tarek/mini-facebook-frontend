import AsideProfile from "../components/profile/AsideProfile";
import useGetUser from "../hooks/user/useGetUser";
import useUpdateUser from "../hooks/user/useUpdateUser";
import { updateUserInput } from "../types/profile/Types";
import { User } from "../types/Types";
import MainProfile from "./MainProfileContainer";


function Profile(){
    const userId : string = "1"

    const {status, userData, error} = useGetUser(userId);
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
                    <MainProfile/>
                </div>
            </div>
        </>
    )

}

export default Profile;