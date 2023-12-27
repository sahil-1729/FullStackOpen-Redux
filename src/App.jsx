import AnecdoteForm from "./components/anecdoteForm";
import AnecList from "./components/anecdoteList";
import Filter from "./components/AnecdoteFilter";
import Notification from "./components/Notification";
import { useEffect } from "react";
import { setAnecdote } from "./reducers/anecdoteReducer";
import anecdote from "./services/anecdote";
import { useDispatch } from "react-redux";
const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdote.getAll().then((val)=>{
      dispatch(setAnecdote(val))
    })
    
  }, []);
  return (
    <div>
      <Notification />
      <Filter />
      <AnecList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
