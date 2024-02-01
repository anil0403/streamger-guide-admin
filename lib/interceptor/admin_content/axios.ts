import axios from "axios";

// content microservice
export const IP = "http://192.168.1.73:8000"; // local
// export const IP = "http://13.201.19.240:8001"; // cloud

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
    if (!config.headers["Authorization"]) {
      config.headers[
        "Authorization"
      ] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA2ODEzNTg1LCJpYXQiOjE3MDY3NzAzODUsImp0aSI6IjA3OGU4Mzc1NWE4MDQ1YmQ5ZDkwNmNkNDY1NzZjMTNjIiwidXNlcl9pZCI6MSwidXNlciI6ImFkbWluIn0.2w3keKbhxjsegzP25TT7YzNdECzH8Zy3CwVk7Lm9A-0`;
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
