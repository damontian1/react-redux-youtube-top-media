import React, { Component } from "react";

const VideoResult = ({currentVideo, defaultVideo}) => {
  console.log(defaultVideo)

  const renderResult = () => {
    if(currentVideo !== ""){
      return(
        <div>
          <iframe width="100%" height="400" src={`https://www.youtube.com/embed/${currentVideo.id.videoId}`} frameBorder="0" allowFullScreen></iframe>
          <h3>{currentVideo.snippet.title}</h3>
          <p>{currentVideo.snippet.description}</p>
        </div>
      )
    }
    else if(defaultVideo){
      return(
        <div>
          <iframe width="100%" height="400" src={`https://www.youtube.com/embed/${defaultVideo.id.videoId}`} frameBorder="0"></iframe>
          <h3>{defaultVideo.snippet.title}</h3>
          <p>{defaultVideo.snippet.description}</p>
        </div>
      )
    }
  }
  
  return(
    <div>
      {renderResult()}
      <hr/>
    </div>
  )
}

export default VideoResult;