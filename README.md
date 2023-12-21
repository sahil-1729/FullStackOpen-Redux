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
