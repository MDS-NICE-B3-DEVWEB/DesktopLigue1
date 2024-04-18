import { axiosInstance } from "./BaseAPI";

export const register = async (user) => {
     const response = await axiosInstance.post('/api/register', user);
    return response.data;
}