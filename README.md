# Learning Redux
### Uncontrolled and control state
https://goshacmd.com/controlled-vs-uncontrolled-inputs-react/

### Learnings
- Functions that create actions are called action creators.
- multiple ways to share the Redux store with components, react-redux
- A module can have only one default export, but multiple "normal" exports
***
- const dispatch = useDispatch(); dispatch here is a function, wherein the parameter has to be a function, also that function has to return an object, which is passed as 'action' in the reducer function, given as 
- const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type){
    case 'vote':
      const toBeChange = state.find(it => action.id === it.id)
      
      const changed = {...toBeChange,votes: toBeChange.votes+1}
      return state.map(it =>{
        return it.id != action.id ? it : changed
      })
    default:
      return state
  }
}
***
- Learnt we can use event.target.name.value instead of event.target.value to get the input of value, wherein name is from this(in the form tag)
- <input name="n"> </input>
***
- While separating the functions, and moving to a dedicated file, which make use of the reducers, need to import the useDispatcher for pushing of items(i.e making changes), but for creation of items, to rerender them needed to use useSelector(state => state).
- 
***
problem was i should have done gpg version to gpg
git config --global gpg.program gpg
and to commit 
$ git commit -S -m "YOUR_COMMIT_MESSAGE"
what helped me
https://gist.github.com/paolocarrasco/18ca8fe6e63490ae1be23e84a7039374?permalink_comment_id=3767413
https://docs.github.com/en/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key
https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits
https://stackoverflow.com/questions/39494631/gpg-failed-to-sign-the-data-fatal-failed-to-write-commit-object-git-2-10-0 ye wala most
***
- Learnt about combineReducers, used multiple reducers. For creating the reducers, used a reducer function, and action creator function for combining the reducers. One for filtering, and other for showing the notes. 
- Also while using the combined reducers, had to make changes in useSelector(state => state.content) instead of useSelector(state => state), because the content to be shown isn't just in state obj now. 
***
- Learnt how to use the createSlice function in redux, was confused in, understanding that, action object has already predefined values, type and payload, wherein the type is given as the createSliceFnName/reducerName, and the payload is the content passed in the action creator(when the fn is called)
***
- Following is a reducer in createSlice
    newNote(state, action) {
      const updated = action.payload;
      state.push({
        content : updated,
        id : getId(),
        votes: 0
      });
    },
- here i have, only modified the value, not returned a new value,
- In this case,
    newNote(state, action) {
      const updated = action.payload;
      return state.push({
        content : updated,
        id : getId(),
        votes: 0
      });
    },
- I have modified(using the push), as well as returning a new value, where both cannot be done at same time. Here(redux toolkit) uses immer, which makes it possible to mutate inside reducer, just so it uses the mutated state to produce immutable state.
***
- Revised how to use axios to connect to .json file
import axios from "axios";

const baseURL = "http://localhost:3001/{name of the key in the .json file}"
const getAll = async () => {
    const response = await axios.get(baseURL)
    // console.log(`This is the response recieved`,response)
    return response.data
}
- in .json file e.g here key is anecdotes, so url would be http://localhost:3001/anecdotes
"anecdotes": [
    {
      "content": "If it hurts, do it more often",
      "id": "47145",
      "votes": 0
    },
    {
      "content": "Adding manpower to a late software project makes it later!",
      "id": "21149",
      "votes": 0
    }]
***
- Learnt about redux thunk. With the help of redux thunk, we can implement action creators, which usually returns a object, can instead return function. 
- The function to be returned, is given dispatch and getState method as parameters, in the anecdotes project, i used dispatch as param,
export const initializeNotes = () => {
  return async dispatch => {
    const notes = await noteService.getAll()
    dispatch(setNotes(notes))
  }
}
***
- Learnt how to use ReactQuery, add <QueryClientProvider/> in the main.jsx file with client={queryClient} where queryClient  = new QueryClient()
- Learnt that, in the given code
export const getAnec = async () => {
  var answer = await axios
    .get("http://localhost:3001/anecdotes")
    .then((res) => {
      return res.data;
    });
};
- when this function is used in useQuery,
  const result = useQuery({
    queryKey: ["anecdotes"],
    queryFn: getAnec
  });
- it wont give any value returned. Because in the getAnec function the promise is getting returned in the getAnec, but it doesn't return to useQuery, so it should be like this
export const getAnec = async () => {
  var answer = await axios
    .get("http://localhost:3001/anecdotes")
    .then((res) => {
      return res.data;
    });
  return answer;
};