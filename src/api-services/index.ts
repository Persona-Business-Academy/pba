import axios from 'axios';

const $apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

$apiClient.interceptors.response.use(function (response) {
  return response.data;
});

export default $apiClient;
