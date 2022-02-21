export interface LoginRequest {
  number: string;
  inn: string;
  location: string;
}

export interface Bank {
  id: number;
  name: string;
  name_of_filial: string;
  address: string;
  code: string;
  stir: string;
  location: string;
  created_at: string;
  updated_at: string;
}

export interface Tariff {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
}

export interface Routes {
  id: number;
  name: string;
  position: number;
  service_area: string;
  route: string;
  created_at?: any;
  updated_at?: any;
  city_id?: any;
  region_id?: any;
}

export interface User {
  id: number;
  name: string;
  client_id: string;
  inn: string;
  debt: number;
  bag: string;
  bank_id: number;
  tarif_id: number;
  created_at: Date;
  updated_at: Date;
  number: string;
  registration_card: string;
  date: string;
  location: string;
  route_id: number;
  bank: Bank;
  tariff: Tariff;
  routes: Routes;
}

export interface LoginResponse {
  user: User;
  token: string;
}
