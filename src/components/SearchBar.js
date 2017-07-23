import React, { Component } from "react";

const SearchBar = props => {
  const renderListItems = () => {
      return props.videos.map((item, i) => {
        return(
          <li onClick={props.selectedVideo.bind(null, item)} className="list-group-item" id="search-bar-list" key={i} style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <span className="hidden-xs"><img src={item.snippet.thumbnails.default.url} /></span>
            <h4 style={{padding: "0.5em", margin: "0 auto"}}>
              {item.snippet.title}
              <br/>
              <span style={{fontWeight: "300"}}>{item.snippet.description}</span>
            </h4>
          </li>
        )
      })
  }
  // console.log(props)
  // console.log(html().toString())
  return(
    <section id="search-bar">
      <div className="text-center" style={{margin: "0em auto",width: "75%"}}>
        <div style={{textAlign: "center"}}>
          <h4 style={{fontFamily: "Anton", fontSize: "1.75em", textAlign: "center"}}>ReactJS + Redux YouTube Top Media</h4>
        </div>
        <div>
          <input type="text" onKeyDown={props.handleKeyDown} onChange={props.handleChangeQuery} className="form-control" placeholder="Search YouTube for this week's most popular movie trailers and songs" autoFocus style={{  padding: "1.5em 1em"}} />
          <ul className="list-group">
            {props.term ? renderListItems() : null} 
          </ul>
        </div>
      </div>
    </section>
  )
}

export default SearchBar;