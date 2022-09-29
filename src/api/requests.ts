import {
  LoginRequest,
  LoginResponse,
  OrderResponse,
  OrderRequest,
  PartnerRequest,
  QuestionnaireRequest,
} from './types';
import axios from 'axios';
import {store} from '../../App';
export const url = 'http://10.0.57.141/api';

export const axiosInstance = axios.create({
  baseURL: url,
});

axiosInstance.interceptors.request.use(e => {
  let token = store.getState().user.token;
  if (!!token) {
    e.headers = {...e.headers, Authorization: `Bearer ${token}`};
  }
  return e;
});

export const requests = {
  auth: {
    login: (data: LoginRequest) =>
      axiosInstance.post<LoginResponse>('/login', data),
  },
  order: {
    createOrder: (data: OrderRequest) =>
      axiosInstance.post<OrderResponse>('/createOrder', data),
    cancel: (id: number) => axiosInstance.get(`/cancelOrder/${id}`),
    getOrderByHash: (hash: string) =>
      axiosInstance.get('/getOrderHash', {params: {hash}}),
    createAdditional: (data: any) =>
      axiosInstance.post('/createExtraOrder', data),
  },
  partner: {
    creatPartner: (data: PartnerRequest) =>
      axiosInstance.post('/createPartner', data),
  },
  questionnaire: {
    createQuestionnaire: (data: QuestionnaireRequest) =>
      axiosInstance.post('/createAnketum', data),
  },
  getHistory: {
    getActive: () => axiosInstance.get('/activeOrders'),
    getActs: () => axiosInstance.get('/getClientActs'),
    getHistory: () =>
      axiosInstance.get('/orderHistory?from=15-11-2019&to=25-11-2023'),
  },
};
