import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoResult from "./VideoResult";
import VideoList from "./VideoList";
import Navigation from "./Navigation";
import { fetchVideos, fetchPopular } from "../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


// console.log(Actions.fetchVideos)

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {videos: "", currentVideo: "", term:""}
    this.videoSearch = this.videoSearch.bind(this)
  }

  componentDidMount(){
    this.props.fetchPopular()
  }

  videoSearch(e){
    this.props.fetchVideos(e.target.value)
  }

  render(){
    // console.log(this.props.videos)
    // console.log(this.state)
    return(
      <div>
        <Navigation />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5" style={{padding: "4em 2em"}}>
              <h4 style={{fontFamily: "Anton", fontSize: "2em", textAlign: "center"}}>THIS WEEK'S MOST POPULAR MOVIES & SONGS</h4>
              <div style={{width: "100%", textAlign: "center"}}>
                <div style={{textAlign: "center"}}>
                  <h4 style={{fontFamily: "Anton", fontSize: "2em", textAlign: "center"}}>TOP MOVIES</h4>
                  <small>click one to watch the trailer</small>
                </div>
                <img src="https://vignette2.wikia.nocookie.net/pokemon/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20140902050035" />
                <img src="https://vignette2.wikia.nocookie.net/pokemon/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20140902050035" />
                <img src="https://vignette2.wikia.nocookie.net/pokemon/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20140902050035" />
                <img src="https://vignette2.wikia.nocookie.net/pokemon/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20140902050035" />
                <img src="https://vignette2.wikia.nocookie.net/pokemon/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20140902050035" />
                <img src="https://vignette2.wikia.nocookie.net/pokemon/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20140902050035" />
                <img src="https://vignette2.wikia.nocookie.net/pokemon/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20140902050035" />
                <img src="https://vignette2.wikia.nocookie.net/pokemon/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20140902050035" />
                <img src="https://vignette2.wikia.nocookie.net/pokemon/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20140902050035" />
              </div>
              <div style={{width: "100%",textAlign: "center", paddingTop: "5em"}}>
                <div style={{textAlign: "center"}}>
                  <h4 style={{fontFamily: "Anton", fontSize: "2em", textAlign: "center"}}>TOP SONGS</h4>
                  <small>click one to hear the song</small>
                </div>
                <img src="https://vignette2.wikia.nocookie.net/pokemon/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20140902050035" />
                <img src="https://vignette2.wikia.nocookie.net/pokemon/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20140902050035" />
                <img src="https://vignette2.wikia.nocookie.net/pokemon/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20140902050035" />
                <img src="https://vignette2.wikia.nocookie.net/pokemon/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20140902050035" />
                <img src="https://vignette2.wikia.nocookie.net/pokemon/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20140902050035" />
                <img src="https://vignette2.wikia.nocookie.net/pokemon/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20140902050035" />
                <img src="https://vignette2.wikia.nocookie.net/pokemon/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20140902050035" />
                <img src="https://vignette2.wikia.nocookie.net/pokemon/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20140902050035" />
                <img src="https://vignette2.wikia.nocookie.net/pokemon/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20140902050035" />
              </div>
            </div>
            <div className="col-md-7" style={{padding: "3em"}}>
              <SearchBar handleChangeQuery={this.videoSearch} />
              <VideoResult currentVideo={this.state.currentVideo} defaultVideo={this.props.videos[0]}/>
              <VideoList popular={this.props.popular} videos={this.props.videos} selectedVideo={(video) => {this.setState({currentVideo: video})}} />
            </div>

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return{
    videos: state.videos,
    popular: state.popular
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchVideos, fetchPopular}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
