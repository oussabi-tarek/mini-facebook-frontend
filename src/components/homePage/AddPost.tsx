import AddPostSearch from './AddPostSearch';
import PROFILE from '../../images/profile.png'

export default function AddPost() {
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
        <AddPostSearch/>
       </div>
    </div>
)
}