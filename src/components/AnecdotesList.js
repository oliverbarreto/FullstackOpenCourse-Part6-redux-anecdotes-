import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { voteAnecdote } from "../store/slices/anecdotesSlice"

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch()

  const handleVoteAnecdote = () => {
    dispatch(voteAnecdote(anecdote.id))
  }

  return (
    <div>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={handleVoteAnecdote}>vote</button>
      </div>
    </div>
  )
}

export const AnecdotesList = () => {
  const anecdotes = useSelector((state) => {
    return state.anecdotes.anecdotes
  })

  return (
    <div>
      {anecdotes
        .slice()
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <Anecdote key={anecdote.id} anecdote={anecdote} />
        ))}
    </div>
  )
}

export default AnecdotesList
