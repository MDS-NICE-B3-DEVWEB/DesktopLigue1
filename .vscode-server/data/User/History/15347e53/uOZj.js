import axios from 'axios';

export const log = async (user) => {
  const url = 'http://164.90.163.120:8000/api/login';
  const response = await axios.post(url, user);
  return response.data;
};