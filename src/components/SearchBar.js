import React, { Component } from "react";

const SearchBar = props => {
  const renderListItems = () => {
      return props.videos.map((item, i) => {
        return(
          <a key={i} href="#" style={{textDecoration: "none", color: "black" }}>
            <li onClick={props.selectedVideo.bind(null, item)} className="list-group-item" id="search-bar-list" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
              <span className="hidden-xs"><img src={item.snippet.thumbnails.default.url} /></span>
              <div style={{margin: "0 auto", padding: "0em 3em"}}>
                <h3 style={{fontSize: "1.7em"}}>
                  {item.snippet.title}
                </h3>
                <p>{item.snippet.description}</p>                
              </div>
            </li>
          </a>
        )
      })
  }
  // console.log(props)
  // console.log(html().toString())
  return(
    <section id="search-bar">
      <div className="text-center" style={{margin: "0em auto",width: "75%"}}>
        <div style={{textAlign: "center"}}>
          <a href="/" style={{textDecoration: "none"}}>
            <h4 id="banner-text">
              <span id="logo">ReactJS + Redux YouTube Top Media</span>
            </h4>
          </a>
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