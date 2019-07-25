import { performRequest } from './index';

export const loginUser  = async (data) => {
  try {
    const response = await performRequest('post', ' /users/login/', data.auth, false); 
    localStorage.setItem('token', response.data.access);
    localStorage.setItem('token_refresh', response.data.refresh);
    localStorage.removeItem('session');
    return response;
  } catch(e) {
    localStorage.removeItem('session')
    return e.response;
  }
}  

export const registerUser  = async (data) => {
  try {
    const response = await performRequest('post', '/users/register/', data, true); 
    return response;
  } catch(e) {
    return e.response;
  }
}  

export const userDetail  = async (data) => {
    try {
      const response = await performRequest('get', `/users/${id}/detail/`, data, true); 
      return response;
    } catch(e) {
      return e.response;
    }
  }  


  export const userUpdate  = async (data) => {
    try {
      const response = await performRequest('patch', `/users/${id}/update/`, data, true); 
      return response;
    } catch(e) {
      return e.response;
    }
  }    
  
  export const userProfileUpdate  = async (data) => {
    try {
      const response = await performRequest('put', `/users/${id}/update/`, data, true); 
      return response;
    } catch(e) {
      return e.response;
    }
  }    

