import React from "react"
import { useDispatch } from "react-redux"
import { createAnecdote } from "../store/slices/anecdotesSlice"
import { setNotification } from "../store/slices/notificationsSlice"

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

    dispatch(createAnecdote(newObject))
    dispatch(setNotification(`New blog posted: ${content}`))
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
