import ReactDOM from "react-dom/client";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import anecdoteReducer from "./reducers/anecdoteReducer";
import { appendAnecdote, setAnecdote, initializeAnecdote} from "./reducers/anecdoteReducer";
import anecdoteFilter from "./reducers/anecdoteFilterReducer";
import { configureStore } from "@reduxjs/toolkit";
import "./index.css"
import notificationReducer from "./reducers/notificationReducer";
import anecdoteService from "./services/anecdote"
const store = configureStore({
  reducer: {
    filter: anecdoteFilter,
    anecdote: anecdoteReducer,
    notification: notificationReducer
  },
});
// anecdoteService.getAll().then((val) =>{
// // val.forEach(element => {
// //   store.dispatch(appendAnecdote(element))
// // });
// store.dispatch(setAnecdote(val))
// }).catch(e => {
//   console.log(`This is the error `,e)
// })
// const store = createStore(reducer);
store.dispatch(initializeAnecdote())
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
