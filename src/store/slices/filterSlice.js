// https://redux-toolkit.js.org/tutorials/quick-start

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  filterText: "",
}

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterText: (state, action) => {
      state.filterText = action.payload
    },
    resetFilterText: (state) => {
      state.filterText = ""
    },
  },
})

// Action creators are generated for each case reducer function
export const { setFilterText, resetFilterText } = filterSlice.actions
