import { createStandaloneToast } from '@chakra-ui/react';
import axios from 'axios';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';
import { toastDefaultOptions } from '@/constants/chakra';

const $apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

const { toast } = createStandaloneToast();

const handleError = (message: string) => {
  toast({
    title: message,
    status: 'error',
    ...toastDefaultOptions,
  });
};

$apiClient.interceptors.request.use(
  async function (config) {
    if (config.headers) {
      const session: Session | null = await getSession();
      if (session?.token) {
        config.headers.Authorization = `Bearer ${session.token}`; // todo when get token
      }
      config.headers['Content-Type'] = 'application/json';
    }
    return config;
  },
  function (error) {
    if (!!error.response.data.message) {
      handleError(error.response.data.responseMessage);
    }
    return Promise.reject(error.response.data);
  },
);

$apiClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    if (!!error.response.data.responseMessage) {
      handleError(error.response.data.responseMessage);
    }
    return Promise.reject(error.response.data);
  },
);

export default $apiClient;
