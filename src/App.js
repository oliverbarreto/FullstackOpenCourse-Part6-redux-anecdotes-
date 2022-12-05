import AnecdoteForm from "./components/AnecdoteForm"
import AnecdoteList from "./components/AnecdotesList"
import Notification from "./components/Notification"
import Filter from "./components/Filter"

const App = () => {
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
