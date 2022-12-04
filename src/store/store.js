import { configureStore } from "@reduxjs/toolkit"
import { counterSlice } from "./slices/counterSlice"
import { anecdotesSlice } from "./slices/anecdotesSlice"

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    anecdotes: anecdotesSlice.reducer,
  },
})

export default store
