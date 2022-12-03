import { configureStore } from "@reduxjs/toolkit"
import anecdoteReducer from "./reducers/anecdoteReducer"
import { composeWithDevTools } from "redux-devtools-extension"

const store = configureStore(
  {
    reducer: anecdoteReducer,
  },
  composeWithDevTools()
)

export default store
