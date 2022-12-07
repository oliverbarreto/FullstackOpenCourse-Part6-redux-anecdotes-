import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { addVoteToAnecdote } from "../store/slices/anecdotesSlice"
import {
  showNotification,
  hideNotification,
} from "../store/slices/notificationsSlice"

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch()

  const handleVoteAnecdote = async () => {
    dispatch(addVoteToAnecdote(anecdote.id))

    dispatch(showNotification(`You voted for: "${anecdote.content}"`))
    setTimeout(() => {
      dispatch(hideNotification())
    }, 5000)
  }

  const style = {
    margin: "0px 5px",
  }
  return (
    <div>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button style={style} onClick={handleVoteAnecdote}>
          vote
        </button>
      </div>
    </div>
  )
}

export const AnecdotesList = () => {
  const anecdotes = useSelector((state) => {
    if (state.filter.filterText === "") {
      return state.anecdotes.allAnecdotes
    } else {
      return state.anecdotes.allAnecdotes.filter((a) => {
        return a.content
          .toLowerCase()
          .includes(state.filter.filterText.toLowerCase())
      })
    }
  })

  return (
    <div>
      {anecdotes
        ? anecdotes
            .slice()
            .sort((a, b) => b.votes - a.votes)
            .map((anecdote) => (
              <Anecdote key={anecdote.id} anecdote={anecdote} />
            ))
        : []}
    </div>
  )
}

export default AnecdotesList
