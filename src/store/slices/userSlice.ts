import {LoginResponse} from '../../api/types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {store} from '../../../App';
import {useSelector} from 'react-redux';

let initialState: LoginResponse & {pinCode: string} = {
  token: '',
  user: undefined,
  pinCode: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoggedIn: (state, action: PayloadAction<LoginResponse>) => {
      return {...action.payload, pinCode: ''};
    },
    userLoggedOut: () => {
      return initialState;
    },
    setUpPinCode: (state, action: PayloadAction<string>) => {
      return {...state, pinCode: action.payload};
    },
    removePinCode: state => {
      return {...state, pinCode: ''};
    },
  },
});

export const {userLoggedIn, userLoggedOut} = userSlice.actions;

export const selectUser = (state: ReturnType<typeof store.getState>) =>
  state.user;

export default userSlice.reducer;
