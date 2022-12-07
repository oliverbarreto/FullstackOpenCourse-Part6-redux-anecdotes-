import axios from "axios"

const baseUrl = "http://localhost:3001/anecdotes"

export const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export const getById = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

export const postAnecdote = async (newObject) => {
  const response = await axios.post(baseUrl, newObject)
  return response.data
}

export const putAnecdote = async (newObject) => {
  const id = newObject.id
  const response = await axios.put(`${baseUrl}/${id}`, newObject)
  return response.data
}

const anecdotesService = { getAll, getById, postAnecdote, putAnecdote }
export default anecdotesService
