
export type AddPostProps={
    addPostClick:()=>void
}
export type FormHeaderProps={
    closePopupClick:()=>void
}
export type PopupProps={
    closePopupClick:()=>void;
    savePostClick:()=>void;
    content:string;
    changeContent:(e:any)=>void;
    image:File;
    changeImage:(e:any)=>void;

}
export type User={
    id:string;
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    createdAt:string;
}
export type Like={
    id:string;
    userId:string;
    postId:string;
}
export type UnLike={
    id:string;
    userId:string;
    postId:string;
}
export type Tag={
    id:string;
    content:string;
    isNew:boolean;
}
export type Comment={
    id:string;
    user:User;
    comment:string;
}
export type Image={
    id:string;
    url:string;
    file:any;
    imageBytes:any;
    isNew:boolean;
}
export type CommentSectionProps={
   comment:Comment;
}