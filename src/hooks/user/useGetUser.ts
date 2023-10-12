import { AxiosInstance } from "axios";
import { ENDPOINTS } from "../endpoint";
import { useAxios } from "../axios/useAxios";
import { useQuery } from "@tanstack/react-query";


const fetchUserQueryFn = async (axios: AxiosInstance, userId : string) => {
    try{
         const response = await axios.get(`${ENDPOINTS.USERS}/${userId}`);
         return response.data;
    }catch(error : any) {console.log(error)}
}
    
   
const useGetUser = (userId : string) => {
    const {axios} = useAxios();
    const {status, data, error} = useQuery({
        queryKey: ["fetchOneUser"],
        queryFn : () => fetchUserQueryFn(axios, userId),
        refetchOnWindowFocus : false
    })
    return{
        status,
        userData : data ? data : [],
        error
    }
}

export default useGetUser;