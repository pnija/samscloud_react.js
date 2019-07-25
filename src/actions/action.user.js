import { LOGIN_USER,  REGISTER_USER } from '../ActionTypes';

export const loginUser = (data) => {
  return {
    type: LOGIN_USER,
    data
  }
}

export const registerUser = (data) => {
  return {
    type: REGISTER_USER,
    data
  }
}

