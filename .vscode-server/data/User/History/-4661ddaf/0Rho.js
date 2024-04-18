import { axiosInstance } from "./BaseAPI";

export const register = async (user) => {
     const response = await axiosInstance.post('/register', user);
    return response.data;
}