import { useSelector, useDispatch } from 'react-redux'
import { increaseVote, newNote } from './reducers/anecdoteReducer'
const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()
  const vote = (id) => {
    dispatch(increaseVote(id))
    console.log('vote', id)
  }
  const execute = (e) => {
    event.preventDefault()
    dispatch(newNote(e.target.val.value))
    console.log("submitted, value entered is ",e.target.val.value)
  }
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={e => {execute(e)}}>
        <div><input placeholder="Enter your value" name='val'/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App