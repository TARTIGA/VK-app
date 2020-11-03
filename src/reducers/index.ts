import { combineReducers } from 'redux';
import { orders } from './orders';
import { user } from './user';


export default combineReducers({
  orders,
  user,
});
