import {LoginRequest, LoginResponse} from './types';
import axios from 'axios';
export const url = 'http://uzinkass.travelticket.uz/api';
export const axiosInstance = axios.create({
  baseURL: url,
});
export const requests = {
  auth: {
    login: (data: LoginRequest) =>
      axiosInstance.post<LoginResponse>('/login', data),
  },
};
