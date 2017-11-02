const topMoviesReducer = (state=[],action) => {
  // console.log(action.payload.data)
  switch(action.type){
    case "FETCH_TOP_MOVIES":
      return [...state, ...action.payload.data.results.slice(0,10)]
      break;
  }
  return state
}

export default topMoviesReducer;