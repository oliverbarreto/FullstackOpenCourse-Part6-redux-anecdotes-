import { useSelector, useDispatch } from "react-redux"
import { voteAnecdote } from "./reducers/anecdoteReducer"
import AnecdoteForm from "./components/AnecdoteForm"

const App = () => {
  // Store state & dispatch for anecdotes
  const anecdotes = useSelector((state) => {
    return state.sort((a, b) => b.votes - a.votes)
  })
  const dispatch = useDispatch()

  const handleVoteAnecdote = (id) => {
    dispatch(voteAnecdote(id))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVoteAnecdote(anecdote.id)}>
              vote
            </button>
          </div>
        </div>
      ))}
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  )
}

export default App
