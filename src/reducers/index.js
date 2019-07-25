import { combineReducers } from 'redux';
import user from './reducer.user';
import { routerReducer } from 'react-router-redux'; 
import {reducer as toastrReducer} from 'react-redux-toastr'

export default combineReducers({
  user,
  router: routerReducer,
  toastr: toastrReducer
})
