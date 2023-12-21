import { useSelector, useDispatch } from "react-redux";
import { increaseVote } from "../reducers/anecdoteReducer";

const anecList = () => {
  const anecdotes = useSelector((state) => {
    console.log(state.filter);
    if (state.filter === "ALL") {
      const res = state.anecdote.sort((a,b) => {
        return a.votes - b.votes
      })
      return res;
    } else {
      const filtered = state.anecdote.filter((val) => {
        const storedVal = val.content.toLowerCase();
        const toBeCompared = state.filter.toLowerCase();
        return storedVal.startsWith(toBeCompared);
      });
      return filtered
    }
    // return state.filter === "ALL" ? state.anecdote :
    // return state.anecdote
  });
  const dispatch = useDispatch();
  const vote = (id) => {
    dispatch(increaseVote(id));
    // console.log("vote", id);
  };
  return (
    <>
      {console.log(anecdotes)}
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default anecList;
