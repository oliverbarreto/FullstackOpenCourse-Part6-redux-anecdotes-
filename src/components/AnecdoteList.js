import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { voteAnecdote } from "../reducers/anecdoteReducer"

const Anecdote = ({ anecdote, handleVoteAnecdote }) => {
  return (
    <div>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={() => handleVoteAnecdote(anecdote.id)}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
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
      {anecdotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleVoteAnecdote={handleVoteAnecdote}
        />
      ))}
    </div>
  )
}

export default AnecdoteList
