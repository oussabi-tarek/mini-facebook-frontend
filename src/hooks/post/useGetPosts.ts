import { AxiosInstance } from "axios";
import { useAxios } from "../axios/useAxios";
import { useQuery } from "@tanstack/react-query";
import { ENDPOINTS } from "../endpoint";
import { Post } from "../../types/post/Types";

const fetchPostsQueryFn = async (
    axios: AxiosInstance,
  ): Promise<Post[]> =>
  axios.get( `${ENDPOINTS.POSTS}`).then((response) => response.data);

const useGetPosts = () => {
    const { axios } = useAxios();
    const { status, data, error } = useQuery({
      queryKey: ["fetchAllPosts"],
      queryFn:() => fetchPostsQueryFn(axios),
      refetchOnWindowFocus: false
    });

    return {
        status,
        posts: data ? data : [],
        error,
      };

}
export default useGetPosts;