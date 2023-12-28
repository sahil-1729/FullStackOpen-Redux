import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import anecdoteService from "../services/anecdote";
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

// export const newNote = (anecdote) => {
//   return {
//     type: "newNote",
//     payload: {
//       content: anecdote,
//       id: getId(),
//       votes: 0,
//     },
//   };
// };

const initialState = anecdotesAtStart.map(asObject);

// export const increaseVote = (id) => {
//   return {
//     type: "vote",
//     id: id,
//   };
// };

const anecdote = createSlice({
  name: "anecdote",
  initialState: [],
  reducers: {
    vote(state, action) {
      // const res = state.sort((a, b) => {
      //   console.log(`the votes ${a.votes} ${b.votes}`);
      //   return a.votes - b.votes;
      // });
      // console.log(`${res}`);
      const toBeChange = state.find((it) => action.payload === it.id);
      const changed = { ...toBeChange, votes: toBeChange.votes + 1 };
      // console.log(JSON.parse(JSON.stringify(changed)));
      return state.map((it) => {
        return it.id != action.payload ? it : changed;
      });
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnecdote(state, action) {
      console.log(`payload `,...action.payload)
      return action.payload;
    },
  },
});

// const reducer = (state = initialState, action) => {
//   console.log("state now: ", state);
//   console.log("action", action);
//   switch (action.type) {
//     case "newNote":
//       const updated = [...state, action.payload];
//       return updated;
//     case "vote":
//       const res = state.sort((a, b) => {
//         console.log(`the votes ${a.votes} ${b.votes}`);
//         return a.votes - b.votes;
//       });
//       console.log(`${res}`);
//       const toBeChange = state.find((it) => action.id === it.id);
//       const changed = { ...toBeChange, votes: toBeChange.votes + 1 };
//       return state.map((it) => {
//         return it.id != action.id ? it : changed;
//       });
//     default:
//       return state;
//   }
// };

export const { vote, appendAnecdote, setAnecdote } = anecdote.actions;
export const initializeAnecdote = () => {
  return async (dispatch) => {
    const val = await anecdoteService.getAll();
    console.log(`initializeAnecdote `,val)
    dispatch(setAnecdote(val));
  };
};
export const newNote = (content) => {
  // const updated = action.payload;
  // state.push(updated);
  return async (dispatch) => {
    const val = await anecdoteService.createNew(content);

    dispatch(appendAnecdote(val));
    console.log(val)
  };
};
export default anecdote.reducer;
