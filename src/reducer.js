const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
};

const counterReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "GOOD":
      const val1 = state.good+1;
      const res1 = { ...state, good: val1 };
      return res1;
    case "OK":
      const val2 = state.ok+1;
      const res2 = { ...state, ok: val2 };
      return res2;
    case "BAD":
      const val3 = state.bad+1;
      const res3 = { ...state, bad: val3 };
      return res3;
    case "ZERO":
      const res4 = {
        good : 0,
        ok: 0,
        bad: 0
      }
      return res4;
    default:
      return state;
  }
};

export default counterReducer;
