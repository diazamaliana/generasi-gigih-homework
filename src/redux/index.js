import { configureStore } from '@reduxjs/toolkit';
import userAuthReducer from './store/userAuth';

export const store = configureStore({
  reducer: {
    userAuth : userAuthReducer,
  },
});