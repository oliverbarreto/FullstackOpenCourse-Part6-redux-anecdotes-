import { createSlice } from "@reduxjs/toolkit"
import anecdotesService from "../../services/anecdotes"

// Helper Function to provide IDs while we dont have a Backend that takes care of it on creation
// const getId = () => (100000 * Math.random()).toFixed(0)

// Helper Function - map content
// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0,
//   }
// }

// Reducer
export const anecdotesSlice = createSlice({
  name: "anecdotes",
  initialState: {
    allAnecdotes: [],
  },
  reducers: {
    voteAnecdote: (state, action) => {
      const id = action.payload
      const anecdoteToEdit = { ...state.allAnecdotes.find((a) => a.id === id) } // if i dont make a copy without reference, i always get an Immer copy
      anecdoteToEdit.votes += 1
      return {
        allAnecdotes: state.allAnecdotes.map((a) =>
          a.id === id ? anecdoteToEdit : a
        ),
      }
    },

    createAnecdote: (state, action) => {
      const newAnecdote = {
        ...action.payload,
      }
      return { allAnecdotes: state.allAnecdotes.concat(newAnecdote) }
    },

    setAnecdotes: (state, action) => {
      return { allAnecdotes: state.allAnecdotes.concat(action.payload) }
    },
  },
})

// Action creators are generated for each case reducer function
export const { voteAnecdote, createAnecdote, setAnecdotes } =
  anecdotesSlice.actions

// Thunks
export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const initialAnecdotes = await anecdotesService.getAll()
    dispatch(setAnecdotes(initialAnecdotes))
  }
}
