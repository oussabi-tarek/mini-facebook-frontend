import { AxiosInstance } from "axios";
import { ENDPOINTS } from "../endpoint";
import { useAxios } from "../axios/useAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query";


const insertPostFn = async (
    axios: AxiosInstance,
    formData: {userId:string, content:string, image:any}
  ) => {
    const form = new FormData();
    form.append("content", formData.content);
    form.append("userId", formData.userId);
    form.append("file", formData.image);
    const response = await axios.post(ENDPOINTS.POSTS, form,{
        headers: {
            "Content-Type": "multipart/form-data",
          },
    });
    return response.data;
  };
  
  const useInsertPost = () => {
    const { axios } = useAxios();
    const queryClient = useQueryClient()
  
    const insertPostMutation = useMutation({
    mutationFn:   (formData:{userId:string, content:string,image:any}) =>
        insertPostFn(axios, formData),
        onSuccess:async()=>{
            queryClient.invalidateQueries(["fetchAllPosts"]);
        }
  });
  
    return {
      insertPostMutation
    }
  };

export default useInsertPost;