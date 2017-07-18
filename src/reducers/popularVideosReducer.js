const popularVideosReducer = (state=[],action) => {
  // console.log(action.payload.data)
  switch(action.type){
    case "FETCH_POPULAR":
      return action.payload.data.items
      break;
  }
  return state
}

export default popularVideosReducer;