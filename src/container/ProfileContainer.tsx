import AsideProfile from "../components/profile/AsideProfile";
import useGetUser from "../hooks/user/useGetUser";
import MainProfile from "./MainProfileContainer";


function Profile(){
    const userId : string = "1"

    const {status, user, error} = useGetUser(userId);
   
    return(
        <>
            <div className="grid grid-cols-12 border-2">
                <div className="col-span-5">
                    
                </div>
                <div className="col-span-7">
                    <MainProfile/>
                </div>
            </div>
        </>
    )

}

export default Profile;