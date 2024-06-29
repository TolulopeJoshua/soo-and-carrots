import { configureStore } from '@reduxjs/toolkit'

import signupSlice from './signup'

export const signupActions = signupSlice.actions

const store = configureStore({
  reducer: {
    signup: signupSlice.reducer
  }
})

export default store;
