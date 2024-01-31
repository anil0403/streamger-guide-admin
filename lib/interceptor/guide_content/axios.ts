import axios from "axios";

// content microservice
export const IP = "http://192.168.1.73:8000"; // local
// export const IP = "http://13.201.166.58:8002"; // cloud

export const CONTENT_URL = `${IP}/guide_app/v1`;

export const contentAuth = axios.create({
  baseURL: CONTENT_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const contentAuthInstance = axios.create({
  baseURL: CONTENT_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
contentAuthInstance.interceptors.request.use(
  async (config) => {
    if (!config.headers["Authorization"]) {
      config.headers[
        "Authorization"
      ] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA2NzIxODgwLCJpYXQiOjE3MDY2Nzg2ODAsImp0aSI6Ijg2OWVjZTkzZTMyODQ3NWI4N2NiZDAxYjU2Y2ZlZjVmIiwidXNlcl9pZCI6MSwidXNlciI6ImFkbWluIn0.5Z2UNP6i8oKFQ83HUTomVXi4bdWqmcH9k64UITg3uwA`;
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
contentAuthInstance.interceptors.response.use(
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

export default contentAuthInstance;
