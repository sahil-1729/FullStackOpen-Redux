import ReactDOM from "react-dom/client";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import anecdoteReducer from "./reducers/anecdoteReducer";
import anecdoteFilter from "./reducers/anecdoteFilterReducer";
import { configureStore } from "@reduxjs/toolkit";
import "./index.css"
import notificationReducer from "./reducers/notificationReducer";
const store = configureStore({
  reducer: {
    filter: anecdoteFilter,
    anecdote: anecdoteReducer,
    notification: notificationReducer
  },
});
// const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
