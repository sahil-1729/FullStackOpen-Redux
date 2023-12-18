import { useSelector, useDispatch } from 'react-redux'
import { increaseVote } from './reducers/anecdoteReducer'
const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()
  const vote = (id) => {
    // useSelector(state => {
    //   const toBeChange = state.find(it => id === it.id)
    //   const changed = {...toBeChange,votes: votes+1}
    //   return state.map(it =>{
    //     return it.id != id ? it : changed
    //   })
    // })
    dispatch(increaseVote(id))
    console.log('vote', id)
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
      <form>
        <div><input /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App