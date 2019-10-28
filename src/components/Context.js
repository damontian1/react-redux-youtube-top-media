import React from 'react';
import axios from 'axios';


const Context = React.createContext();
export class Provider extends React.Component {
  state = {
    topMovies: "",
    topMusic: "",
    videos: "",
    currentVideo: "",
    term: "",
    handleClick: this.handleClick.bind(this),
    handleKeyDown: this.handleKeyDown.bind(this),
    videoSearch: this.videoSearch.bind(this),
    selectedVideo: this.selectedVideo.bind(this),
    handleMovieClick: this.handleMovieClick.bind(this),
    handleMusicClick: this.handleMusicClick.bind(this),
  }

  handleClick(id, item) { }

  videoSearch(e) {
    document.querySelector(".list-group").style.visibility = "visible";
    this.setState({ term: e.target.value })
    this.fetchVideos(e.target.value)
  }

  handleMovieClick(title) {
    this.setState({ currentVideo: "" })
    this.props.fetchVideos(title)
    document.querySelector(".list-group").style.visibility = "hidden";
  }

  handleMusicClick(artist, title) {
    var song = `${artist} - ${artist}`;
    this.props.fetchVideos(song);
    document.querySelector(".list-group").style.visibility = "hidden";
  }

  selectedVideo(video, event) {
    this.setState({ currentVideo: video });
    document.querySelector(".list-group").style.visibility = "hidden";
  }

  handleKeyDown(e) {
    if (e.keyCode === 27) {
      document.querySelector(".list-group").style.visibility = "hidden";
    }
  }

  fetchTopMovies() {
    axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=631627e688738d84a1cae51aa035b23a`)
      .then(res => {
        const data = res.data.results;
        this.setState({ topMovies: data });
      })
  }

  fetchTopMusic() {
    axios
      .get(`https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/us/itunes-music/top-songs/all/10/explicit.json`)
      .then(res => {
        const data = res.data.feed.results;
        this.setState({ topMusic: data });
      })
  }

  fetchVideos(query) {
    axios
      .get(`https://www.googleapis.com/youtube/v3/search?q=${query}&part=snippet&maxResults=6&key=AIzaSyDzGlcjHMtL3Vx2dE6HuRe4lHRm9U7K8lQ`)
      .then(res => {
        const data = res.data.items;
        this.setState({ videos: data });
      })
  }

  componentDidMount() {
    this.fetchTopMovies();
    this.fetchTopMusic();
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
export const Consumer = Context.Consumer;