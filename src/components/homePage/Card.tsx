import PROFILE from '../../images/profile.png'
import POST from '../../images/post.jpg';
import {useState} from "react";
import {AiOutlineLike} from "react-icons/ai";
import {BiDislike} from "react-icons/bi";
import {FaRegComment} from "react-icons/fa";
import {colors} from "../../colors";

export default function Card(){

    const [isVisible,setIsVisible]=useState(false);
    const [likeColor,setLikeColor]=useState("");
    const [unlikeColor,setUnlikeColor]=useState("");
    const changeVisibility=()=>{
        isVisible ? setIsVisible(false) : setIsVisible(true);
    }
    const changelikeColor=()=>{
        likeColor==="" ? setLikeColor(colors.TEXT_BLUE_600) : setLikeColor("");
        setUnlikeColor("");
    }
    const changeUnlikeColor=()=>{
         unlikeColor==="" ? setUnlikeColor(colors.TEXT_RED_600) : setUnlikeColor("");
         setLikeColor("");
    }

    return(
        <div className="flex flex-col items-left mb-6 mt-6 ml-20 mr-20 bg-white border border-gray-200 rounded-lg shadow  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className='flex flex-row m-4'>
            <img
                className="h-10 w-10 rounded-full"
                src={PROFILE}
                alt=""
                /> 
             <h5 className='mt-2 ml-2 dark:text-white'>Utilisateur 1</h5>
            </div>   
            <div className='flex flex-col items-left mt-1 ml-10 mr-10'>
                <p className='mb-3 dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sequi sit omnis aut? Neque, impedit a quidem nihil amet atque fugit aliquid repellendus sapiente quia consequatur, sint saepe delectus nam?</p>
                <img  src={POST} className='w-83 h-83'/>
            </div>
            <div className='flex flex-row  justify-between  ml-10 mt-3 mb-2 w-full'>
                <div className="flex flex-row">
                <div className='flex flex-row'>
                    {
                        likeColor==="" ? <button onClick={changelikeColor}  className={`dark:text-white font-light ${likeColor}`}>
                            <AiOutlineLike className='w-7 h-7' />
                        </button>:<button onClick={changelikeColor}  className={`dark:${colors.TEXT_BLUE_600} font-light ${likeColor}`}>
                            <AiOutlineLike className='w-7 h-7' />
                        </button>
                    }
                   <p className='mt-3.5 dark:text-white'>91</p>
                </div>
                <div className='flex flex-row mt-3'>
                    {
                        unlikeColor==="" ?  <button onClick={changeUnlikeColor} className={`dark:text-white font-light ${unlikeColor}`}>
                            <BiDislike className='w-7 h-7' />
                        </button> : <button onClick={changeUnlikeColor} className={`dark:${colors.TEXT_RED_600} font-light ${unlikeColor}`}>
                            <BiDislike className='w-7 h-7' />
                        </button>
                    }
                   <p className='mt-1 mr-1 dark:text-white'>10</p>
                </div>
                <div className='flex flex-row mt-2'>
                   <button className="text-black dark:text-white " onClick={changeVisibility}>
                    <FaRegComment className='w-7 h-7 mr-1' />
                   </button>
                   <p className='mt-2 dark:text-white'>09</p>
                </div>
                </div>
                <div className='mr-12 mt-6 dark:text-white' >
                    <p>It's been 2 hours</p>
                </div>
            </div>
            {isVisible && <div className="flex flex-row ml-10 mt-3 mb-2">
                <div className='flex flex-row m-4'>
                    <img
                        className="h-10 w-10 rounded-full"
                        src={PROFILE}
                        alt=""
                    />
                    <div className="ml-2 mb-4">
                        <h5 className="text-sm">Utilisateur 1</h5>
                        <p className="text-sm">this is my first comment</p>
                    </div>
                </div>
            </div>
            }
        </div>
    );
}