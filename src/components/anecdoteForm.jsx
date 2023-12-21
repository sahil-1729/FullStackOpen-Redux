import { useDispatch } from "react-redux";
import { newNote } from "../reducers/anecdoteReducer";
const newForm = () => {
  const dispatch = useDispatch();

  const Execute = (e) => {
    event.preventDefault();
    dispatch(newNote(e.target.val.value));
    console.log("submitted, value entered is ", e.target.val.value);
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
          <input placeholder="Enter your value" name="val" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  );
};
export default newForm;
