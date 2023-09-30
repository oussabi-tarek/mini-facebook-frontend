import PROFILE from '../images/profile.png';
import AddPostSearch from './AddPostSearch';

export default function AddPost() {
return(
    <div className='flex flex-row items-center justify-center m-4 '>
       <div>
       <img
        className="h-9 w-9 rounded-full mr-2"
        src={PROFILE}
        alt=""
        />
       </div>
       <div>
        <AddPostSearch/>
       </div>
    </div>
)
}