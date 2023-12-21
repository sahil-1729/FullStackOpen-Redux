import { useDispatch } from "react-redux";
import { filter } from "../reducers/anecdoteFilterReducer";

const Filter = () => {
  const dispatch = useDispatch();
  const filt = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const val = e.target.value;
    dispatch(filter(val));
  };

  return (
    <>
      <input
        onChange={(e) => filt(e)}
        type="text"
        placeholder="Enter the filter"
      />
    </>
  );
};

export default Filter;
