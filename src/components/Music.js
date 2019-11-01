import React from "react";
import { Consumer } from './Context';
import Spinner from './Spinner';

class Music extends React.Component {

  render() {
    return (
      <Consumer>
        {props => {
          const renderList = () => {
            return props.topMusic.map((item, i) => {
              return (
                <div key={i}>
                  <a href="#">
                    <img onClick={props.handleMusicClick.bind(null, item.artistName, item.name)} src={item.artworkUrl100} style={{ borderRadius: "4px", width: "100%" }} />
                    <p style={{ color: "black" }}>{`#${i + 1} | ${item.artistName} - ${item.name}`}</p>
                  </a>
                </div>
              );
            });
          };
          return (
            <section id="music">
              <div style={{ width: "100%", textAlign: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <h4 style={{ fontFamily: "Anton", fontSize: "2em", textAlign: "center" }}>THIS WEEK'S TOP SONGS</h4>
                  <small className="highlight">click to watch the music video</small>
                </div>
                <div className="music__posters mt-5">
                  {props.topMusic ? renderList() : <Spinner />}
                </div>
              </div>
            </section>
          );
        }}
      </Consumer>
    );
  }
}


export default Music;