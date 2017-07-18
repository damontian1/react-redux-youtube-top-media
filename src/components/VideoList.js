import React, { Component } from "react";

const VideoList = ({videos, selectedVideo, popular}) => {

  const renderSearchList = () => {
    return videos.slice(1).map((video) => {
      // console.log(video)
      return(
        <div key={video.etag}>
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
      )
    })
  }

  const renderPopularList = () => {
    return popular.map((popular) => {
      // console.log(video)
      return(
        <div className="col-md-4" style={{padding: "1em"}} key={popular.etag}>
          <a href={`https://www.youtube.com/watch?v=${popular.id}`} target="_blank">
            <img src={popular.snippet.thumbnails.high.url} style={{width: "100%"}}/>
          </a>
        </div>  
      )
    })
  }
  return(
    <div>
      {
        videos != "" ? 
        renderSearchList()
        :
        <div>
          <h4 style={{fontFamily: "Anton", fontSize: "2em", textAlign: "center"}}>This Week's Trending Youtube Videos</h4>
          <div className="row">
            {renderPopularList()}
          </div>
        </div>
        
      }
    </div>
  )
}

export default VideoList;

