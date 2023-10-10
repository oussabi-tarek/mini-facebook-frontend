import { Post } from "../types/post/Types";

export const mapPostList=(posts:Post[])=>{
    return posts.map((post:Post)=>{
        return mapPost(post);
    })
}
export const mapPost=(post:Post)=>{
        return {
            user:post.user,
            createdDate:post.createdDate,
            updatedDAte:post.updatedDAte,
            content:post.content,
            likes:post.likes,
            tages:post.tages,
            comments:post.comments,
            images:post.images
        }
}
export const mapTags=(tags:string[])=>{
    return tags.map((tag:string)=>{
        return mapTag(tag);
    })
}
export const mapTag=(tag:string)=>{
    return {
        id:'',
        content:tag,
        isNew:true
    }
}
export const mapImage=(image:any)=>{
    return {
        id:'',
        url:"",
        postId:'',
        file:image,
        isNew:true
    }
}











