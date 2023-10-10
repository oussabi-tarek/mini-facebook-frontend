import { AxiosInstance } from "axios";
import { ENDPOINTS } from "../endpoint";
import { AuthContext } from "../../context/AuthContextProvider";

const login = async (
    axios: AxiosInstance,
    formData : {email: string, password: string}
    )=>{
    const form = new FormData();
    form.append("email", formData.email);
    form.append("password", formData.password);
    console.log(form);
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    const response = await axios.post(ENDPOINTS.LOGIN, form, config);
    return response;
}

export const sendLogin = (axios:AxiosInstance, authenticationContext: AuthContext, formData:{email: string, password:string}) => {
    
    login(axios, formData)
    .then(response => {
        console.log(response.data);
        console.log(response.data);
        const authToken = response.data.auth.access_token;
        const refreshToken = response.data.auth.refresh_token;
        const userId = response.data.user.id;
        const name = response.data.user.lastName +" "+ response.data.user.lastName;
        const email = response.data.user.email;
        authenticationContext.globalLogInDispatch({authToken,refreshToken,userId,name,email});
    })
    .catch(error =>{
        console.log(error);
    });
}