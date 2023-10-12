import { AxiosInstance } from "axios";
import { ENDPOINTS } from "../endpoint";
import { useAxios } from "../axios/useAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Post } from "../../types/post/Types";


const updatePostFn = async (
    axios: AxiosInstance,
   post : Post
  ) => {
    const response = await axios.put(`${ENDPOINTS.POSTS}/${post.id}`, post,{
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
    mutationFn:   (post: Post) =>
        updatePostFn(axios, post),
        onSuccess:async()=>{
            queryClient.invalidateQueries(["fetchUserPosts"]);
        }
  });
  
    return {
      updatePostMutation
    }
  };

export default useEditPost;