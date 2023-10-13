import { AxiosInstance } from "axios";
import { ENDPOINTS } from "../endpoint";
import { useAxios } from "../axios/useAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query";


const updatePostFn = async (
    axios: AxiosInstance,
    formData: {postId:string, userId:string, content:string, image:any,tags:string}
  ) => {
    const form = new FormData();
    form.append("content", formData.content);
    form.append("userId", formData.userId);
    form.append("file", formData.image);
    form.append("tags",formData.tags);
    console.log("postIdRequest :  ", formData.postId);
    console.log("url : " ,`${ENDPOINTS.POSTS}/${formData.postId}` );
    const response = await axios.put(`${ENDPOINTS.POSTS}/${formData.postId}`, form,{
        headers: {
            "Content-Type": "multipart/form-data",
          },
    });
    return response.data;
  };
  
  const useEditPost = () => {
    const { axios } = useAxios();
    const queryClient = useQueryClient()
  
    const updatePostMutation = useMutation({
    mutationFn:   (formData:{postId: string, userId:string, content:string,image:any,tags:string}) =>
        updatePostFn(axios, formData),
        onSuccess:async()=>{
            queryClient.invalidateQueries(["fetchUserPosts"]);
        }
  });
  
    return {
      updatePostMutation
    }
  };

export default useEditPost;