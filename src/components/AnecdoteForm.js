import React from "react"
import { useDispatch } from "react-redux"
import { createAnecdote } from "../store/slices/anecdotesSlice"
import {
  hideNotification,
  showNotification,
} from "../store/slices/notificationsSlice"
import anecdotesService from "../services/anecdotes"

export const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const handleAddAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.newAnecdote.value
    event.target.newAnecdote.value = ""

    const newObject = {
      content,
      votes: 0,
    }
    const newAnecdote = await anecdotesService.postAnecdote(newObject)
    dispatch(createAnecdote(newAnecdote))

    dispatch(showNotification(`New blog posted: ${content}`))
    setTimeout(() => {
      dispatch(hideNotification())
    }, 5000)
  }

  return (
    <div>
      <h2>create new</h2>

      <form onSubmit={handleAddAnecdote}>
        <div>
          <label htmlFor="new-anecdote">Anecdote:</label>{" "}
          <input id="new-anecdote" name="newAnecdote" type="text" />
        </div>
        <button>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
