import React, { Component } from "react";
import { Consumer } from './Context';

class VideoList extends React.Component {
  render() {
    return (
      <Consumer>
        {props => {

          const renderSearchList = () => {
            return props.videos.slice(1).map((video) => {
              return (
                <div key={video.etag}>
                  <ul className="media-list">
                    <li className="media">
                      <div className="media-left">
                        <a href="#" onClick={props.selectedVideo.bind(null, video)} style={{ textDecoration: "none" }}>
                          <img className="media-object" src={video.snippet.thumbnails.default.url} width="120" height="90" />
                        </a>
                      </div>
                      <div className="media-body">
                        <a href="#" onClick={props.selectedVideo.bind(null, video)} style={{ color: "black", textDecoration: "none" }}>
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

          return (
            <div className="col-md-4">
              {props.videos && renderSearchList()}
            </div>
          )

        }}
      </Consumer>
    )
  }

}

export default VideoList;

