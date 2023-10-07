import AddPost from "./homePage/AddPost";


const ProfileHeader = () => {

    return(
        <>
            <div className="flex flex-col m-auto">
                <div className="flex justify-around">
                    <p>What's on your mind today barry ?</p>
                </div>
                <div>
                    <AddPost/>
                </div>

            </div>

        </>
    )
}

export default ProfileHeader;