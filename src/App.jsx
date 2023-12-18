import { useSelector, useDispatch } from 'react-redux'
import { increaseVote, newNote } from './reducers/anecdoteReducer'
import AnecdoteForm from "./components/anecdoteForm"
import AnecList from "./components/anecdoteList"
const App = () => {



  return (
    <div>
      <AnecList/>
      <h2>create new</h2>
      <AnecdoteForm/>
    </div>
  )
}

export default App