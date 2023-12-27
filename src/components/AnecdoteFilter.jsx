import { useDispatch } from "react-redux";
import { setFilter } from "../reducers/anecdoteFilterReducer";

const Filter = () => {
  const dispatch = useDispatch();
  const filt = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    const val = e.target.value;
    dispatch(setFilter(val));
  };

  return (
    <>
      <input
        className="border-solid border-green-600 rounded-lg  w-4/12 p-1 border-2"
        onChange={(e) => filt(e)}
        type="text"
        placeholder="Enter the filter"
      />
    </>
  );
};

export default Filter;
