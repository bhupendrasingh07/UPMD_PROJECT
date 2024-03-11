import axios from "axios";

const baseURL =import.meta.env.REACT_APP_BASEURL||'http://localhost:8080/api/v1';
// const url='http://localhost:8080/api/v1'

const API = axios.create({ baseURL });

API.interceptors.request.use((req) => {
    if (localStorage.getItem("token")) {
      req.headers.Authorization = `Bearer ${localStorage.getItem("token")} `;
    }
    return req;
  });
  
  export default API;