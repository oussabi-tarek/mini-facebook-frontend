import { useQuery } from "@tanstack/react-query";
import axios, { AxiosInstance } from "axios"
import { useAxios } from "../axios/useAxios";
import { ENDPOINTS } from "../endpoint"


const fetchAllUserPosts = async (axios : AxiosInstance, userId : string) => {
    try{
        const res = await axios.get(`${ENDPOINTS.USERS}/${userId}`);
        return res.data;
    }catch(error : any) { throw error }
}

const useGetUserPosts = (userId: string) => {
    const {axios} = useAxios();
     const {status, data, error} = useQuery({
        queryKey: ["fetchAllUserPosts"],
        queryFn : () => fetchAllUserPosts(axios, userId),
        refetchOnWindowFocus : false
    })
    return{
        status,
        userData : data ? data : [],
        error
    }
}
export default useGetUserPosts;