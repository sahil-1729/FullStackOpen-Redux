import AnecdoteForm from "./components/anecdoteForm";
import AnecList from "./components/anecdoteList";
import Filter from "./components/AnecdoteFilter";
const App = () => {

  return (
    <div>
      <Filter/>
      <AnecList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
