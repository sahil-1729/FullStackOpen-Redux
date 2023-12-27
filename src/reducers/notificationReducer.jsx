import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: "",
  reducers: {
    setNotification_NewAnecdote(state, action) {
      console.log(`The state of filter ${state} and action ${action}`);
      const value = action.payload;
      const result = `The new anecdote ${value} has been added`;
      return result;
    },
    setNotification_AddVote(state, action) {
      const value = action.payload;
      const result = `You have voted ${value}`;
      return result;
    },
    setNotification_None(state,action){
        return ""
    }
  },
});

export const { setNotification_NewAnecdote, setNotification_AddVote, setNotification_None } =
  notificationSlice.actions;
export default notificationSlice.reducer;
