import React, { Component } from "react";

const SearchBar = props => {
  // console.log(props)
  return(
    <div className="row">
      <div className="col-md-8 col-md-offset-2">
        <div className="text-center" style={{marginTop: "2em"}}>
          <h4 style={{fontFamily: "Anton", fontSize: "2em"}}>YOUTUBE SEARCH</h4>
          <input type="text" onChange={(e)=>{return props.handleChangeQuery(e.target.value)}} className="form-control" placeholder="Searches YouTube as you type.." autoFocus/>
        </div>
      </div>
    </div>
  )
}

export default SearchBar;