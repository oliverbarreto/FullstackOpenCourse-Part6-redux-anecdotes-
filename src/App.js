import React from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

import AnecdoteForm from "./components/AnecdoteForm"
import AnecdoteList from "./components/AnecdotesList"
import Notification from "./components/Notification"
import Filter from "./components/Filter"

import anecdotesService from "./services/anecdotes"
import { setAnecdotes } from "./store/slices/anecdotesSlice"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    anecdotesService.getAll().then((initialAnecdotes) => {
      dispatch(setAnecdotes(initialAnecdotes))
    })
  }, [dispatch])

  return (
    <div>
      <Notification />
      <br />
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App
