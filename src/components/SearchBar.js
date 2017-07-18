import React, { Component } from "react";

const SearchBar = props => {
  // console.log(props)
  return(
    <div className="text-center" style={{margin: "2em auto",width: "75%"}}>
      <div style={{textAlign: "center"}}>
        <h4 style={{fontFamily: "Anton", fontSize: "2em", textAlign: "center"}}>YOUTUBE SEARCH</h4>
        <small>search and watch Youtube on the same page</small>
      </div>
      <input type="text" onChange={props.handleChangeQuery} className="form-control" placeholder="Search YouTube for trending videos and music" autoFocus/>
    </div>
  )
}

export default SearchBar;