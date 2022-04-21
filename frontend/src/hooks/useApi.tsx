import axios, { AxiosRequestConfig } from 'axios';
import { useState } from 'react';
import { baseURL } from '../services/api';

export default function useApi<T = unknown>() {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  function call(config: AxiosRequestConfig) {
    setIsLoading(true);
    axios({
      baseURL,
      ...config
    })
      .then((response) => {
        setData(response.data.data);
        return response.data.data;
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  async function callForm(config: AxiosRequestConfig) {
    setIsLoading(true);
    const response = await axios({
      baseURL,
      ...config
    });

    setIsLoading(false);
    return response.data;
  }

  return {
    call,
    callForm,
    data,
    setData,
    isLoading,
    error
  };
}
