import { createStandaloneToast } from '@chakra-ui/react';
import axios from 'axios';
import { toastDefaultOptions } from '@/constants/chakra';

const $apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

$apiClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    const { toast } = createStandaloneToast();
    toast({ title: error.response.data.message, status: 'error', ...toastDefaultOptions });
    return Promise.reject(error.response.data);
  },
);

export default $apiClient;
