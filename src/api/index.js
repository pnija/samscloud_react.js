import axios from 'axios'

const API_URL = 'http://18.220.144.229:8001/api/';
export const performRequest = (method, url, params, auth) => {
 const body = method === 'get' ? 'params' : 'data'
 
 const config = {
   method,
   url,
   baseURL: API_URL,
   [body]: params || {}
 }
 if (auth) {
   config.headers = {
     Authorization: `Bearer ${localStorage.token}`
   }
 }
 
 return axios.request(config)
}