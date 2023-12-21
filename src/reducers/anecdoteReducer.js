const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const getId = () => (100000 * Math.random()).toFixed(0);

export const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

export const newNote = (anecdote) => {
  return {
    type: "newNote",
    payload: {
      content: anecdote,
      id: getId(),
      votes: 0,
    },
  };
};

const initialState = anecdotesAtStart.map(asObject);

export const increaseVote = (id) => {
  return {
    type: "vote",
    id: id,
  };
};

const reducer = (state = initialState, action) => {
  console.log("state now: ", state);
  console.log("action", action);
  switch (action.type) {
    case "newNote":
      const updated = [...state,action.payload]
      return updated
    case "vote":
      const toBeChange = state.find((it) => action.id === it.id);
      const changed = { ...toBeChange, votes: toBeChange.votes + 1 };
      return state.map((it) => {
        return it.id != action.id ? it : changed;
      });
    default:
      return state;
  }
};

export default reducer;
