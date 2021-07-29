import { configureStore } from '@reduxjs/toolkit';
import userAuthReducer from './store/userAuth';
import playlistReducer from './store/playlist';


export const store = configureStore({
  reducer: {
    userAuth : userAuthReducer,
    playlist: playlistReducer
  },
});