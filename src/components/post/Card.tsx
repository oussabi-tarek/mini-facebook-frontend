import PROFILE from '../../images/profile.png'
import POST from '../../images/post.jpg';
import {AiOutlineLike} from "react-icons/ai";
import {BiDislike} from "react-icons/bi";
import {FaRegComment} from "react-icons/fa";
import {colors} from "../../colors";
import { CardProps } from '../../types/post/Types';
import { CommentSection } from './CommentSection';
import AddComment from './AddComment';

export default function Card(props:CardProps){
    return(
<div className={`flex ${props.isProfile ? 'flex-col' : 'flex-col'} items-left w-9/12 h-10/12 mb-6 mt-6 ml-20 mr-20 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700`}>
            <div className='flex flex-row m-4'>
            <img
                className="h-10 w-10 rounded-full"
                src={PROFILE}
                alt=""
                /> 
             <h5 className='mt-2 ml-2 dark:text-white'>{props.post.user.firstName} {props.post.user.lastName}</h5>
            </div>   
            <div className='flex flex-col items-left mt-1 ml-10 mr-10'>
                <p className='mb-3 dark:text-white'>{props.formatContent(props.post.content)}</p>
                <img  src={ props.post.images[0]!==undefined ?  props.getImageFromBytes(props.post.images[0].imageBytes):POST} className='w-83 h-83'/>
            </div>
            <div className='flex flex-row  justify-between  ml-10 mt-3 mb-2 w-full'>
                <div className="flex flex-row">
                <div className='flex flex-row'>
                    {
                        props.likeColor==="" ? <button onClick={()=>{props.changeLikeColor(props.post.id)}}  className={`dark:text-white font-light ${props.likeColor}`}>
                            <AiOutlineLike className='w-7 h-7' />
                        </button>:<button onClick={()=>{props.changeLikeColor(props.post.id)}}  className={`dark:${colors.TEXT_BLUE_600} font-light ${props.likeColor}`}>
                            <AiOutlineLike className='w-7 h-7' />
                        </button>
                    }
                   <p className='mt-3.5 dark:text-white'>{props.post.likes.length}</p>
                </div>
                <div className='flex flex-row mt-3'>
                    {
                        props.unlikeColor==="" ?  <button onClick={()=>{props.changeUnlikeColor(props.post.id)}} className={`dark:text-white font-light ${props.unlikeColor}`}>
                            <BiDislike className='w-7 h-7' />
                        </button> : <button onClick={()=>{props.changeUnlikeColor(props.post.id)}} className={`dark:${colors.TEXT_RED_600} font-light ${props.unlikeColor}`}>
                            <BiDislike className='w-7 h-7' />
                        </button>
                    }
                   <p className='mt-1 mr-1 dark:text-white'>{props.post.unLikes.length}</p>
                </div>
                <div className='flex flex-row mt-2'>
                   <button className="text-black dark:text-white mt-1" onClick={props.changeVisibility}>
                    <FaRegComment className='w-7 h-7 mr-1' />
                   </button>
                   <p className='mt-2 dark:text-white'>{props.post.comments.length}</p>
                </div>
                </div>
                <div className='mr-12 mt-6 dark:text-white' >
                    <p>It's been {props.getElapsedTime(props.post.createdDate)}</p>
                </div>
            </div>
            {props.isVisible && 
               props.post.comments.map((comment,index)=>{
                  return <CommentSection  key={index} comment={comment}/>
               })
            }
             {props.isVisible && 
                <AddComment addComment={props.addComment} comment={props.comment} 
                  changeComment={props.changeComment} />
            }
        </div>
    );
}