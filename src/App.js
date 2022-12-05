import AnecdoteForm from "./components/AnecdoteForm"
import AnecdoteList from "./components/AnecdotesList"
import Notification from "./components/Notification"

const App = () => {
  return (
    <div>
      <Notification />
      <br />
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App
