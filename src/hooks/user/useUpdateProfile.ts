import { AxiosInstance } from "axios";
import { ENDPOINTS } from "../endpoint";
import { Image } from "../../types/Types";
import { useAxios } from "../axios/useAxios";
import {  QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";

const updateProfileFn = async (axios : AxiosInstance, image : any, userId: string) => {
    try{
            const response = await axios.put(`${ENDPOINTS.IMAGES}/user/${userId}`, image, {
                  headers: {
            "Content-Type": "multipart/form-data",
          },
            });
            return response.data;
    }catch(error : any) {throw error}
}

const useUpdateProfile = () => {
    const {axios} = useAxios();
    const queryClient = useQueryClient();
    const updateProfileMutation = useMutation<Image, Error, { image: any; userId: string }>(
        (params) => updateProfileFn(axios, params.image, params.userId),
        {
            onSuccess: (data) => {
                queryClient.invalidateQueries(["fetchOneUser"]);
            },
        }
    );
    return {updateProfileMutation}
  
}
export default useUpdateProfile;