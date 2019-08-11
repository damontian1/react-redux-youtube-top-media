import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoResult from "./VideoResult";
import VideoList from "./VideoList";
import Navigation from "./Navigation";
import Movies from "./Movies";
import Music from "./Music";
import { fetchVideos, fetchTopMusic, fetchTopMovies } from "../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


// console.log(Actions.fetchVideos)

class App extends Component {

  constructor(props){
    super(props);
    this.state = {videos: "", currentVideo: "", term:""}
    this.videoSearch = this.videoSearch.bind(this)
    this.handleMovieClick = this.handleMovieClick.bind(this);
    this.handleMusicClick = this.handleMovieClick.bind(this);
    this.selectedVideo = this.selectedVideo.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentWillMount(){
    this.props.fetchTopMusic()
    this.props.fetchTopMovies()
  }

  videoSearch(e){
    document.querySelector(".list-group").style.visibility = "visible";
    this.setState({term: e.target.value})
    this.props.fetchVideos(e.target.value)
  }

  handleMovieClick(title){
    // console.log(title)
    this.setState({currentVideo: ""})
    this.props.fetchVideos(title)
    document.querySelector(".list-group").style.visibility = "hidden";
  }

  handleMusicClick(artist, title){
    // console.log(artist, title)
    var song = `${artist} - ${artist}`
    this.props.fetchVideos(song)
    document.querySelector(".list-group").style.visibility = "hidden";
  }

  selectedVideo(video, event){
    this.setState({currentVideo: video});
    document.querySelector(".list-group").style.visibility = "hidden";
  }

  handleKeyDown(e){
    if(e.keyCode === 27){
      document.querySelector(".list-group").style.visibility = "hidden";
    }
  }

  render(){
    console.log(this.props)
    // console.log(this.state)
    const renderMediaList = () => {
      return(
        <div className="row">
          <div className="col-md-6">
            <Movies topMovies={this.props.topMovies} handleMovieClick={this.handleMovieClick} />
          </div>
          <div className="col-md-6">
            <Music topMusic={this.props.topMusic} handleMusicClick={this.handleMusicClick} />
          </div>
        </div>
      )
    }

    return(
      <div>
        <Navigation {...this.props} term={this.state.term} handleKeyDown={this.handleKeyDown} handleChangeQuery={this.videoSearch} selectedVideo={this.selectedVideo} />
        <div className="row">
          <div className="container-fluid">
            <VideoResult currentVideo={this.state.currentVideo} defaultVideo={this.props.videos[0]} term={this.state.term}/>
            <VideoList videos={this.props.videos} selectedVideo={this.selectedVideo} />
          </div>
        </div>
        {renderMediaList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return{
    videos: state.videos,
    topMusic: state.topMusic,
    topMovies: state.topMovies

  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchVideos, fetchTopMusic, fetchTopMovies}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
