import React, { Component } from "react";

const VideoList = ({videos, selectedVideo}) => {

  const renderSearchList = () => {
    return videos.slice(1).map((video) => {
      // console.log(video)
      return(
        <div key={video.etag}>
          <ul className="media-list">
            <li className="media">
              <div className="media-left">
                <a href="#" onClick={selectedVideo.bind(null, video)} style={{textDecoration: "none"}}>
                  <img className="media-object" src={video.snippet.thumbnails.default.url} width="120" height="90"/>
                </a>
              </div>
              <div className="media-body">
                <a href="#" onClick={selectedVideo.bind(null, video)} style={{color: "black", textDecoration: "none"}}>
                  <h4 className="media-heading">{video.snippet.title}</h4>
                  <p>{video.snippet.description}</p>
                </a>
              </div>
            </li>
          </ul>
        </div>
      )
    })
  }

  return(
    <div className="col-md-4">
      {
        videos != "" ? 
        renderSearchList()
        :
        null
      }
    </div>
  )
}

export default VideoList;

