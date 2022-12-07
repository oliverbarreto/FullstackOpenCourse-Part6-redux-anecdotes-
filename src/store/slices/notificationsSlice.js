// https://redux-toolkit.js.org/tutorials/quick-start

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  message: null,
  lastTimeoutId: null,
}

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    showNotification: (state, action) => {
      return {
        message: action.payload.message,
        lastTimeoutId: action.payload.lastTimeoutId,
      }
    },
    hideNotification: (state) => {
      state.message = null
      state.lastTimeoutId = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { showNotification, hideNotification } = notificationsSlice.actions

// Thunks
export const setNotification = (message) => {
  return async (dispatch, getState) => {
    const lastId = getState().notifications.lastTimeoutId
    if (lastId !== null) {
      clearTimeout(lastId)
    }
    const lastTimeoutId = setTimeout(() => {
      dispatch(hideNotification())
    }, 5000)
    dispatch(showNotification({ message, lastTimeoutId }))
  }
}
