const videoReducer = (state=[],action) => {
  // console.log(action)
  switch(action.type){
    case "FETCH_VIDEOS":
      return [...action.payload.data.items]
      break;
  }
  return state
}

export default videoReducer;