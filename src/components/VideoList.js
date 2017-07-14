import React, { Component } from "react";

const VideoList = ({videos, selectedVideo}) => {
  
  const renderList = () => {
    return videos.map((video) => {
      // console.log(video)
      return(
        <div className="row" key={video.etag}>
          <div className="col-md-8 col-md-offset-2">
            <ul className="media-list">
              <li className="media">
                <div className="media-left">
                  <a href="#" onClick={() => selectedVideo(video)}>
                    <img className="media-object" src={video.snippet.thumbnails.default.url} />
                  </a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">{video.snippet.title}</h4>
                  <p>{video.snippet.description}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )
    })
  }
  if(!videos){
    return null
  }
  return(
    <div>
      {renderList()}
    </div>
  )
}

export default VideoList;

