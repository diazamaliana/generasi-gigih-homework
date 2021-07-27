import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    accessToken: '',
    user: {},
  }
  
  const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
      login: (state, action) => {
        state.isAuthenticated = true
        state.accessToken = action.payload
      },
      storeUser: (state, action) => {
        state.user = action.payload
      },
      logout: state => {
        state = initialState
      },
    },
  })
  
  export const { login, logout, storeUser } = userAuthSlice.actions
  
  export default userAuthSlice.reducer

