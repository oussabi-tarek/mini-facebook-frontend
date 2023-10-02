import AsideProfile from "./AsideProfile";
import MainProfile from "./MainProfile";

function Profile(){

    return(
        <>
            <div className="grid grid-cols-12 border-2">
                <div className="col-span-5">
                    <AsideProfile/>
                </div>
                <div className="col-span-7">
                    <MainProfile/>
                </div>
            </div>
        </>
    )

}

export default Profile;