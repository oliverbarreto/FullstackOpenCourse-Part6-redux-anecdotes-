import React from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

import AnecdoteForm from "./components/AnecdoteForm"
import AnecdoteList from "./components/AnecdotesList"
import Notification from "./components/Notification"
import Filter from "./components/Filter"

import { initializeAnecdotes } from "./store/slices/anecdotesSlice"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes()) // Using Redux-Thunk - no logic to call the API service

    // anecdotesService.getAll().then((initialAnecdotes) => { // Not using Redux-Thunk - there is logic inside this component to call the API service
    //   dispatch(setAnecdotes(initialAnecdotes))
    // })
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
