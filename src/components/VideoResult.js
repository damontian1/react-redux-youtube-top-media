import React, { Component } from "react";

const VideoResult = ({currentVideo}) => {
  // console.log(props)
  const renderResult = () => {
    if(currentVideo){
      return(
        <div style={{padding: "1em 0"}}>
          <iframe width="100%" height="400" src={`https://www.youtube.com/embed/${currentVideo.id.videoId}`} frameBorder="0"y></iframe>
          <h3>{currentVideo.snippet.title}</h3>
          <p>{currentVideo.snippet.description}</p>
        </div>
      )
    }
  }
  
  return(
    <div className="row">
      <div className="col-md-8 col-md-offset-2">
        {renderResult()}
        <hr/>
      </div>
    </div>
  )
}

export default VideoResult;