import axios from 'axios';

export const register = async (user) => {
  const url = 'http://164.90.163.120:8000/api/register';
  const response = await axios.post(url, user);
  return response.data;
};