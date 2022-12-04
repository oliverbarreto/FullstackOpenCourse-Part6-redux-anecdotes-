import { createSlice } from "@reduxjs/toolkit"

// Initial State
const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
]

// Helper Function to provide IDs while we dont have a Backend that takes care of it on creation
const getId = () => (100000 * Math.random()).toFixed(0)

// Helper Function - map content
const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  }
}

// Reducer
const initialAnecdotes = anecdotesAtStart.map(asObject)

const initialState = {
  anecdotes: initialAnecdotes,
}

export const anecdotesSlice = createSlice({
  name: "anecdotes",
  initialState,
  reducers: {
    voteAnecdote: (state, action) => {
      const id = action.payload
      const anecdoteToEdit = state.anecdotes.find((a) => a.id === id)
      anecdoteToEdit.votes += 1
      state.anecdotes = state.anecdotes.map((a) =>
        a.id === id ? anecdoteToEdit : a
      )
    },
    createAnecdote: (state, action) => {
      const content = action.payload
      state.anecdotes = [
        ...state.anecdotes,
        {
          content,
          id: getId(),
          votes: 0,
        },
      ]
    },
  },
})

// Action creators are generated for each case reducer function
export const { voteAnecdote, createAnecdote } = anecdotesSlice.actions
