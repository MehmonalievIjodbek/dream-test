import axios from "axios";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Change request data/error here
http.interceptors.request.use(
  (config: any) => {
    
    config.headers = {
      ...config.headers,
    };
    return config;
  },
  (error) => {
    console.log("error", error.message);

    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) =>
    new Promise((resolve, _) => {
      resolve(response);
    }),
  (error) => {
    if (!error.response) {
      return new Promise((_, reject) => {
        reject(error);
      });
    }
      return Promise.reject(error);
  }
);

export default http;
