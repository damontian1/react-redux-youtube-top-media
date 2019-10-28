import React from "react";
import { Consumer } from './Context';

class Music extends React.Component {

  render() {
    return (
      <Consumer>
        {props => {
          const renderList = () => {
            return props.topMusic.map((item, i) => {
              return (
                <div key={i} style={{ display: "inline-block", width: "275px", height: "250px", overflow: "hidden", margin: "0.3em 0em", padding: "0em 0.5em" }}>
                  <a href="#">
                    <img onClick={props.handleMusicClick.bind(null, item.artistName, item.name)} src={item.artworkUrl100} style={{ borderRadius: "4px" }} />
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
                <div style={{ height: "1155px" }}>
                  {props.topMusic && renderList()}
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