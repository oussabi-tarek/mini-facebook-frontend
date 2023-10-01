import AddPostSearch from './AddPostSearch';
import PROFILE from '../../images/profile.png'
import Popup from '../addPost/Popup';
import { useState } from 'react';

export default function AddPost() {
    const [showPopup, setShowPopup] = useState(false);
    
    const addPostClick = () => {
        setShowPopup(true);
    }
    const closePopupClick = () => {
        setShowPopup(false);
    }
    const savePostClick = () => {
        setShowPopup(false);
    }

return(
    <div className='flex flex-row items-center justify-center m-4 '>
       <div>
        <button>
       <img
        className="h-9 w-9 rounded-full mr-2"
        src={PROFILE}
        alt=""
        /></button>
       </div>
       <div>
        <AddPostSearch addPostClick={addPostClick}/>
       </div>
       {
              showPopup && <Popup closePopupClick={closePopupClick} savePostClick={savePostClick}/> 
       }
    </div>
)
}