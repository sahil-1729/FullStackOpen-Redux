
export const filter = (text) => {
    return {
      type: "setFilter",
      search: text
    }
  } 
  
const reducer = (state = "ALL",action) => {
    console.log(`state : ${state}, action : ${action}`)
    switch(action.type){
        case "setFilter":
            const value = action.search
            return value
        default:
            return state
    }
}

export default reducer