import { createSlice } from "@reduxjs/toolkit";
// export const filter = (text) => {
//     return {
//       type: "setFilter",
//       search: text
//     }
//   }

const filterSlice = createSlice({
  name: "filter",
  initialState: "ALL",
  reducers: {
    setFilter(state, action) {
      console.log(`The state of filter ${state} and action ${action}`)
      // switch (action.type) {
      //   case "setFilter":
          const value = action.payload;
          return value;
      //   default:
      //     return state;
      // }
      // const value = action.search;
      // return value;
    },
    // filter(text) {
    //   return {
    //     type: "setFilter",
    //     search: text,
    //   };
    // },
  },
});

// const reducer = (state = "ALL",action) => {
//     console.log(`state : ${state}, action : ${action}`)
//     switch(action.type){
//         case "setFilter":
//             const value = action.search
//             return value
//         default:
//             return state
//     }
// }
export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
