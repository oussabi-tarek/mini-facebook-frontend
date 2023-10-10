import PROFILE from '../../images/profile.png';
import BIO from '../../images/bio.png';
import SINCE from '../../images/iconSince.jpeg';
import UpdateIcon from '../../images/updateIcon.png'
import { User } from '../../types/Types';
import React, { useEffect, useState } from 'react';
import { Post } from '../../types/post/Types';
import PopupEditProfile from './PopupEditProfile';


const AsideProfile = ({user, updateUserClick} : {user:User, updateUserClick: any}) => {

    const [totalPost, setTotalPost] = useState<number>(0);
    const [likedPercent, setLikedPercent] = useState<number>(0);
    const [unlikedPercent, setUnlikedPercent] = useState<number>(0);
    const [showPopup, setShowPopup] = useState<boolean>(false);

    const handlePopup = () => setShowPopup(!showPopup);

    useEffect(() => {
        const userPosts : Post[] = user.userPosts;

        const numTotalPosts : number = userPosts ? userPosts.length : 0 ;
        const numLikedPosts = userPosts.filter((post) => post.likes.length > 0).length;
        const numUnlikedPosts = userPosts.filter((post) => post.unLikes.length > 0).length;
        
        setTotalPost(numTotalPosts);
        setLikedPercent((numLikedPosts / numTotalPosts) *100);
        setUnlikedPercent((numUnlikedPosts / numLikedPosts) *100);
    }, [])

    return(
        <>
            <div className="w-full flex flex-col border-1">
                
                <div className='flex flex-col p-6'>
                    <span className='flex justify-center mb-2 text-xl font-bold border-2 border-w rounded-full'>About Me</span>
                    <div className='flex mb-3'><img src={BIO} className="w-6 h-6 mr-3" alt="bio"/>{user.biography}</div>
                    <div className='flex mb-3'><img src={SINCE} className="w-6 h-6 mr-3" alt="membership" />Member since {user.createdAt}</div>
                </div>
                <div className='w-full bg-gray-200 p-6'>
                 <div className='flex flex-col'>
                    <div className='flex relative'>
                        <img src={PROFILE} alt="user" className='w-36 h-36 rounded-full' />
                        <p className='text-xl mt-12 ml-2 '>{user.firstName + " " + user.lastName}</p>                        
                    </div>
                </div>

               <div className='flex justify-start w-full border-b-2 p-6 border-black'>
            
                    <div className='text-center mr-auto ml-6'>
                            <div className="font-bold">{totalPost}</div>
                            <div>POSTs</div>
                        </div>
                        <div className='text-center mr-auto'>
                            <div className="font-bold">{likedPercent}%</div>
                            <div>Liked</div>
                        </div>
                         <div className='text-center mr-auto'>
                            <div className="font-bold">{unlikedPercent}%</div>
                            <div>Unliked</div>
                        </div>           
                    
                </div>          

                <div>
                    <div className='flex justify-center'>
                        <h4 className='text-xl font-bold text-center p-6'>Your Information</h4>
                        <button onClick={handlePopup}>
                            <img src={UpdateIcon} alt="update" className="w-6 h-6"/>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 gap-6 mt-4 ">
                    <div className="grid grid-cols-2 mb-6">
                        <div className='mr-2'>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                value={user.firstName}
                                readOnly
                                className="block  w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />     
                        </div>
                        <div> 
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                value={user.lastName}
                                readOnly
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />  
                        </div>      
                    </div>

                    <div className="grid grid-cols-1 mb-6">      
                        <input
                             id="email"
                            name="email"
                            type="text"
                            value={user.email}
                            readOnly
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        />              
                    </div>
                    <div className="grid grid-cols-1 mb-6">      
                        <input
                             id="location"
                            name="location"
                            type="text"
                            readOnly
                            value={user.location}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        />              
                    </div>    
                    </div>
                </div>

                </div>
            </div>
            {showPopup && (
                <PopupEditProfile handlePopup={handlePopup} updateUser={updateUserClick} user={user}/>
            )}
        </>
    )

}
export default AsideProfile;