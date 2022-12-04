import React from "react"
import { useDispatch } from "react-redux"
import { createAnecdote } from "../store/slices/anecdotesSlice"

export const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const handleAddAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.newAnecdote.value
    event.target.newAnecdote.value = ""
    console.log(content)
    dispatch(createAnecdote(content))
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
