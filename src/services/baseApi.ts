import axios from "axios";
import { get } from "http";

export class baseApi {
  constructor() {}
  get = <T>(url: string, data?: any) => {
    return axios.get<T>(`${process.env.apiHost}${url}`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.apiKey}`,
      },
      data,
    });
  };
  post = <T>(url: string, data?: any) => {
    return axios.post<T>(`${process.env.apiHost}${url}`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.apiKey}`,
      },
      data,
    });
  };
  put = <T>(url: string, data?: any) => {
    return axios.put<T>(`${process.env.apiHost}${url}`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.apiKey}`,
      },
      data,
    });
  };
  delete = <T>(url: string, data?: any) => {
    return axios.delete<T>(`${process.env.apiHost}${url}`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.apiKey}`,
      },
      data,
    });
  };
}
