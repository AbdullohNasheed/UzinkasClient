import {combineReducers} from 'redux';
import userSlice from './userSlice';
import orderSlice from './orderSlice';

export const rootReducer = combineReducers({user: userSlice, order: orderSlice});
 