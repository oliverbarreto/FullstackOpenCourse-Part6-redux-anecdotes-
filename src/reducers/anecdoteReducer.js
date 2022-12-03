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

// Action Creators
export const voteAnecdote = (id) => {
  return {
    type: "@anecdote/vote",
    payload: { id },
  }
}

export const addAnecdote = (content) => {
  return {
    type: "@anecdote/newAnecdote",
    payload: {
      content,
      id: getId(),
      votes: 0,
    },
  }
}

// Reducer
const initialState = anecdotesAtStart.map(asObject)

const anecdoteReducer = (state = initialState, action) => {
  console.log("state now: ", state)
  console.log("action", action)

  if (action.type === "@anecdote/vote") {
    const id = action.payload.id
    const anecdoteToVote = state.find((a) => a.id === id)
    const modifiedAnecdote = {
      ...anecdoteToVote,
      votes: anecdoteToVote.votes + 1,
    }
    return state.map((anecdote) =>
      anecdote.id !== id ? anecdote : modifiedAnecdote
    )
  }

  if (action.type === "@anecdote/newAnecdote") {
    return state.concat(action.payload)
  }

  return state
}

export default anecdoteReducer
