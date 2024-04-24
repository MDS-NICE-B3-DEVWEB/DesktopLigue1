import axios from 'axios';

export const login = async (user) => {
  const url = `https://api.ligue1.live/api/login?email=${encodeURIComponent(user.email)}&password=${encodeURIComponent(user.password)}`;
  const response = await axios.get(url);
  return response.data;
};