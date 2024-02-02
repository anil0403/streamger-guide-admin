import axios from "axios";
import { cookies } from "next/headers";
import { useSession } from "next-auth/react";
import { getProviders } from "next-auth/react";
// content microservice
// export const IP = "http://192.168.1.73:8000"; // local
export const IP = "http://3.109.157.254:8001"; // cloud

export const ADMIN_LOGIN_URL = `${IP}/api/v1`;

// admin login
export const adminAuth = axios.create({
  baseURL: ADMIN_LOGIN_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const serviceAuth = axios.create({
  baseURL: ADMIN_LOGIN_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const serviceAuthInstance = axios.create({
  baseURL: ADMIN_LOGIN_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
serviceAuthInstance.interceptors.request.use(
  async (config) => {
    // const { data: session } = useSession();
    // console.log("session = ", session);
    // const providers = await getProviders()
    // console.log("Providers", providers)
    // const cookieStore = cookies();
    // const token = cookieStore.get("access");
    // console.log("token = ", token);
    if (!config.headers["Authorization"]) {
      config.headers["Authorization"] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA2OTAxNzMwLCJpYXQiOjE3MDY4NTg1MzAsImp0aSI6ImFiMWI0YzAzMzQwYjRhYTNiODhmZWU3NWY1NDFlYWIwIiwidXNlcl9pZCI6MSwidXNlciI6ImFkbWluIn0.UBqG6Cy6-RFpAzi6p_RMVEPjlbkrbMakgDxnA1_8CnA`;
    }
    return config;
  },
  (error) => {
    // Handle request errors here

    return Promise.reject(error);
  }
);
// End of Request interceptor

// Response interceptor
serviceAuthInstance.interceptors.response.use(
  (response) => {
    // Modify the response data here

    return response;
  },
  (error) => {
    // Handle response errors here

    return Promise.reject(error);
  }
);
// End of Response interceptor

export default serviceAuthInstance;
