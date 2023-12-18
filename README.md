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