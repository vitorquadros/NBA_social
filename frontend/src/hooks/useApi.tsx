import axios, { AxiosRequestConfig } from 'axios';
import { useState } from 'react';
import { baseURL } from '../services/api';

export default function useApi<T = unknown>() {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  function call(config: AxiosRequestConfig) {
    axios({
      baseURL,
      ...config
    })
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  async function callForm(config: AxiosRequestConfig) {
    const response = await axios({
      baseURL,
      ...config
    });

    return response.data.data;
  }

  return {
    call,
    callForm,
    data,
    isLoading,
    error
  };
}
