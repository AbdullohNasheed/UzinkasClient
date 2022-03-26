import { OrderResponse} from '../../api/types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {store} from '../../../App';
import {useSelector} from 'react-redux';

let initialState: OrderResponse = {
  token:'',
  message: '',
  success: '',
  order: undefined,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    orderIn: (state, action: PayloadAction<OrderResponse>) => {
      return action.payload;
    },
    orderOut: () => {
      return initialState;
    },
  },
});

export const {orderIn, orderOut} = orderSlice.actions;

export const selectOrder = (state: ReturnType<typeof store.getState>) =>
  state.order;

export default orderSlice.reducer;
