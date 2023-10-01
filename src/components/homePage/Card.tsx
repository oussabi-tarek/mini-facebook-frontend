import PROFILE from '../images/profile.png';
import POST from '../images/post.jpg';
import LIKE from '../images/like.png';
import NOTLIKE from '../images/notlike.png';
import COMMENT from '../images/comment.png';

export default function Card(){
    return(
        <div className="flex flex-col items-left mb-6 mt-6 ml-20 mr-20 bg-white border border-gray-200 rounded-lg shadow  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className='flex flex-row m-4'>
            <img
                className="h-10 w-10 rounded-full"
                src={PROFILE}
                alt=""
                /> 
             <h5 className='mt-2 ml-2'>Utilisateur 1</h5>
            </div>   
            <div className='flex flex-col items-left mt-1 ml-10 mr-10'>
                <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sequi sit omnis aut? Neque, impedit a quidem nihil amet atque fugit aliquid repellendus sapiente quia consequatur, sint saepe delectus nam?</p>
                <img  src={POST} className='w-83 h-83'/>
            </div>
            <div className='flex flex-row  justify-between  ml-10 mt-3 mb-2 w-full'>
                <div className="flex flex-row">
                <div className='flex flex-row'>
                   <button> 
                    <img src={LIKE} className='w-9 h-9' />
                   </button>
                   <p className='mt-3.5'>91</p>
                </div>
                <div className='flex flex-row mt-3.5'>
                   <button> 
                    <img src={NOTLIKE} className='w-9 h-9' />
                   </button>
                   <p className='mb-2'>10</p>
                </div>
                <div className='flex flex-row mt-1'>
                   <button> 
                    <img src={COMMENT} className='w-8 h-8' />
                   </button>
                   <p className='mt-3'>09</p>
                </div>
                </div>
                <div className='mr-12 mt-6' >
                    <p>It's been 2 hours</p>
                </div>
            </div>
            
            {/* <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </a> */}
           
        </div>
    );
}