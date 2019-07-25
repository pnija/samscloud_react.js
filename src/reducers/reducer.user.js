import {  LOGIN_USER_SUCCEED, LOGIN_USER_FAILED,REGISTER_USER_SUCCEED,REGISTER_USER_FAILED } from '../ActionTypes';

const initialState = {
currentUser: null,
errors: null,
session: !!localStorage.token,
resetPassword: null,
sendResetPassword: {getUser: null, isSend: null}
}

export default (state = initialState, action) => {
const { type, data, new_response } = action;
switch(type) {
case LOGIN_USER_SUCCEED:
return { ...state, session: !!data.access, currentUser: new_response.data, errors: null };
case LOGIN_USER_FAILED:
return { ...state, errors: data.message, currentUser: null, session: false };
case REGISTER_USER_SUCCEED:
    return {   ...state, register: data.register, errors: null } ;
case REGISTER_USER_FAILED :
    return { ...state, errors: data.message, currentUser: null, session: false}
default:
return state
}
}