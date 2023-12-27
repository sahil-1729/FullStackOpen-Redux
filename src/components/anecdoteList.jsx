import { useSelector, useDispatch } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import { setNotification_AddVote, setNotification_None } from "../reducers/notificationReducer";

const anecList = () => {
  const anecdotes = useSelector((state) => {
    // console.log(state.filter);
    if (state.filter === "ALL") {
      var anecList = [...state.anecdote]
      // console.log(`list of anecdotes`,anecList)
      anecList.sort((a, b) => {
        // console.log(`the votes ${a.votes} ${b.votes}`)
        return a.votes - b.votes;
      });
      // console.log(...res);
      return anecList;
    } else {
      var anecList = [...state.anecdote]
      console.log(`list of anecdotes`,anecList)
      const res = anecList.sort((a, b) => {
        // console.log(`the votes ${a.votes} ${b.votes}`)
        return a.votes - b.votes;
      });
      // console.log(state);
      const filtered = res.filter((val) => {
        // console.log(val.content, state.filter)
        
        const storedVal = val.content.toLowerCase()
        const toBeCompared = state.filter.toLowerCase()
        return storedVal.startsWith(toBeCompared);
      });

      return filtered;
    }
    // return state.filter === "ALL" ? state.anecdote :
    // return state.anecdote
  });
  const dispatch = useDispatch();
  const increaseVote = (id) => {
    console.log(clickCount)
    if(clickCount >= 0){
      clearTimeout(clickCount)
      console.log(`clear timeout `,clickCount)
    }
    dispatch(vote(id));
    // console.log(`The id i am looking`,id)
    const anec = anecdotes.find(it => {
      // console.log(it.id)
      return it.id === id
    })
    console.log("vote ", anec);
    dispatch(setNotification_AddVote(anec.content))
    // window.clearTimeout(timeout);
    window.setTimeout(() => {
      dispatch(setNotification_None());
    }, 5000);
  };
  return (
    <>
      {/* {console.log(anecdotes)} */}
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button className="border-solid border-green-600 rounded-md p-1 border-2" onClick={() => increaseVote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default anecList;
