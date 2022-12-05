// https://redux-toolkit.js.org/tutorials/quick-start

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  message: null,
}

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    showNotification: (state, action) => {
      state.message = action.payload
    },
    hideNotification: (state) => {
      state.message = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { showNotification, hideNotification } = notificationsSlice.actions
