import React, { Component } from "react";
import YouTube from "youtube-api-search";
import SearchBar from "./SearchBar";
import VideoResult from "./VideoResult";
import VideoList from "./VideoList";
import _ from "lodash";


// console.log(_.debounce)

class App extends Component {

  constructor(){
    super();
    this.state = {videos: null, currentVideo: ""}
    this.videoSearch = this.videoSearch.bind(this)
  }

  videoSearch(query){
    // console.log(query)
    YouTube({key: "AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss", term: query}, (videos) => {
      this.setState({
        videos,
        currentVideo: videos[0]
      })
    })
  }


  render(){
    // console.log(this.state)
    const YouTubeSearch = _.debounce(this.videoSearch, 450)

    console.log(this.state)
    return(
      <div className="container">
        <SearchBar {...this.state} handleChangeQuery={YouTubeSearch} />
        <VideoResult currentVideo={this.state.currentVideo} />
        <VideoList videos={this.state.videos} selectedVideo={(video) => {this.setState({currentVideo: video})}} />
      </div>
    )
  }
}

export default App;

