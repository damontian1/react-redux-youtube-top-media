const topMusicReducer = (state=[],action) => {
  // console.log(action.payload.data)
  switch(action.type){
    case "FETCH_TOP_MUSIC":
      return [...action.payload.data.feed.results]
      break;
  }
  return state
}

export default topMusicReducer;