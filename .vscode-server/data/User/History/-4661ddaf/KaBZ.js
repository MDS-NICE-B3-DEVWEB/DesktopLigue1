import axios from 'axios';

export const register = async (user) => {
  const url = 'https://api.ligue1.live/api/register';
  const response = await axios.post(url, user);
  return response.data;
};