import AnecdoteForm from "./components/anecdoteForm";
import AnecList from "./components/anecdoteList";

import { useDispatch } from "react-redux";
import { filter } from "./reducers/anecdoteFilter";
const App = () => {
  const dispatch = useDispatch()
  const filt = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const val = e.target.value
    dispatch(filter(val))
  };

  return (
    <div>
      <input
        onChange={(e) => filt(e)}
        type="text"
        placeholder="Enter the filter"
      />

      <AnecList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
