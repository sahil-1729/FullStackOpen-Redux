import AnecdoteForm from "./components/anecdoteForm";
import AnecList from "./components/anecdoteList";
import Filter from "./components/AnecdoteFilter";
import Notification from "./components/Notification";
const App = () => {
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
