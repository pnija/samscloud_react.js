import { call, put, takeLatest } from 'redux-saga/effects';
import { LOGIN_USER,LOGIN_USER_SUCCEED,LOGIN_USER_FAILED,REGISTER_USER,REGISTER_USER_SUCCEED,REGISTER_USER_FAILED } from '../ActionTypes';
import { loginUser, registerUser } from '../api/user';

const login = function* (action) {
  try {
  const response = yield call(loginUser, action.data);
    const data = response.data;
    if(response.statusText === "OK") {
      yield put({type: LOGIN_USER_SUCCEED, data});
      
    }
    else
      yield put({type: LOGIN_USER_FAILED, data});
   } catch (e) {
      yield put({type: LOGIN_USER_FAILED, message: e.message});
   }
}

const register = function* (action) {
  try {
    const response = yield call(registerUser, action.data);
    const data = response.data;
    if(response.statusText === "OK") {
      yield put({type: REGISTER_USER_SUCCEED, data});
     
    }
    else
      yield put({type:  REGISTER_USER_FAILED, data});
  } catch (e) {
    yield put({type:  REGISTER_USER_FAILED, message: e.message});
  }
}


export const userSaga = [
  
  takeLatest(LOGIN_USER, login),
  takeLatest( REGISTER_USER, register),

]