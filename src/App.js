import AnecdoteForm from "./components/AnecdoteForm"
import AnecdoteList from "./components/AnecdotesList"
// import Counter from "./components/Counter"

const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App
