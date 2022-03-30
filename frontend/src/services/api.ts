import axios from 'axios';

export const baseURL = 'http://localhost:3333';

export const Api = axios.create({
  baseURL
});
