import axios from "axios";

export const baseApi = axios.create({
    baseURL : process.env.apiHost,
    headers:{
        Accept: "application/json",
        Authorization: `Bearer ${process.env.apiKey}`,
    }
})