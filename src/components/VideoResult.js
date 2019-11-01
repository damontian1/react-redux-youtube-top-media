import React from "react";
import { Consumer } from './Context';

class VideoResult extends React.Component {
  render() {
    return (
      <Consumer>
        {props => {

          const renderResult = () => {
            return (
              <div className="video-result">
                <iframe width="100%" height="600" src={`https://www.youtube.com/embed/${props.currentVideo.id.videoId}`} frameBorder="0" allowFullScreen></iframe>
                <div className="video-result__text pb-5 mb-5">
                  <h3>{props.currentVideo.snippet.title}</h3>
                  <p>{props.currentVideo.snippet.description}</p>
                </div>
              </div>
            )
          }

          return (
            < div className="col-md-8" >
              {props.currentVideo && renderResult()}
            </div>
          )

        }}
      </Consumer >
    )
  }
}

export default VideoResult;