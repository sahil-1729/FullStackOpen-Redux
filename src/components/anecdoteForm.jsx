import { useDispatch } from "react-redux";
import { newNote } from "../reducers/anecdoteReducer";
import {
  setNotification_NewAnecdote,
  setNotification_None,
} from "../reducers/notificationReducer";

const newForm = () => {
  const dispatch = useDispatch();

  const Execute = async (e) => {
    event.preventDefault();
    dispatch(setNotification_NewAnecdote(e.target.val.value));

    // const res = await anecdoteService.createNew(e.target.val.value);
    // console.log(res);
    dispatch(newNote(e.target.val.value));

    e.target.val.value = "";
    var timeout = setTimeout(() => {
      dispatch(setNotification_None());
    }, 5000);
    // clearTimeout(timeout);
    // console.log(typeof timeout)
    // console.log("submitted, value entered is ", e.target.val.value);
  };
  return (
    <>
      <h2>create new</h2>
      <form
        onSubmit={(e) => {
          Execute(e);
        }}
      >
        <div>
          <input
            className="border-solid border-green-600 rounded-lg w-4/12 p-1 border-2"
            placeholder="Enter your value"
            name="val"
          />
        </div>
        <button
          className="border-solid border-green-600 rounded-sm w-4/12 p-1 border-2"
          type="submit"
        >
          create
        </button>
      </form>
    </>
  );
};
export default newForm;
