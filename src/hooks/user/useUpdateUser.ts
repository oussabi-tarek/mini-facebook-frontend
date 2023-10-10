import { AxiosInstance } from "axios";
import { ENDPOINTS } from "../endpoint";
import { User } from "../../types/Types";
import { useAxios } from "../axios/useAxios";
import {  useMutation } from "@tanstack/react-query";
import { updateUserInput } from "../../types/profile/Types";

const updateUserFn = async (axios : AxiosInstance, user: updateUserInput, userId: string) => {
    try{
            const response = await axios.put(`${ENDPOINTS.USERS}/${userId}`, user);
            return response.data;
    }catch(error : any) {throw error}
}

const useUpdateUser = () => {
    const {axios} = useAxios();
   
    const updateUserMutation = useMutation<User, Error, { user: updateUserInput; userId: string }>(
        (params) => updateUserFn(axios, params.user, params.userId)
    );

    return {updateUserMutation}
  
}
export default useUpdateUser;