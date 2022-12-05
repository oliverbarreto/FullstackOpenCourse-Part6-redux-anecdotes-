import { configureStore } from "@reduxjs/toolkit"
import { counterSlice } from "./slices/counterSlice"
import { anecdotesSlice } from "./slices/anecdotesSlice"
import { notificationsSlice } from "./slices/notificationsSlice"

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    anecdotes: anecdotesSlice.reducer,
    notifications: notificationsSlice.reducer,
  },
})

export default store
