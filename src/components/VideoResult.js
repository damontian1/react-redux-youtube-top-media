import React, { Component } from "react";

const VideoResult = ({currentVideo, defaultVideo}) => {
  // console.log(currentVideo)

  const renderResult = () => {
    if(currentVideo !== ""){
      return(
        <div>
          <iframe width="100%" height="600" src={`https://www.youtube.com/embed/${currentVideo.id.videoId}`} frameBorder="0" allowFullScreen></iframe>
          <h3>{currentVideo.snippet.title}</h3>
          <p>{currentVideo.snippet.description}</p>
        </div>
      )
    }
    else if(defaultVideo){
      return(
        <div>
          <iframe width="100%" height="600" src={`https://www.youtube.com/embed/${defaultVideo.id.videoId}`} frameBorder="0" allowFullScreen></iframe>
          <h3>{defaultVideo.snippet.title}</h3>
          <p>{defaultVideo.snippet.description}</p>
        </div>
      )
    }
  }
  
  return(
    <div className="col-md-8">
      {renderResult()}
    </div>
  )
}

export default VideoResult;