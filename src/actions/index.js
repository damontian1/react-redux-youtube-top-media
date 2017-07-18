import axios from "axios";

export const fetchVideos = (query) => {
  const request = 
  axios
    .get(`https://www.googleapis.com/youtube/v3/search?q=${query}&part=snippet&maxResults=5&key=AIzaSyDzGlcjHMtL3Vx2dE6HuRe4lHRm9U7K8lQ`)
    return{
      type: "FETCH_VIDEOS",
      payload: request
    }
}
export const fetchPopular = () => {
  const request = 
  axios
    .get(`https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&part=snippet&maxResults=18&key=AIzaSyDzGlcjHMtL3Vx2dE6HuRe4lHRm9U7K8lQ`)
    return{
      type: "FETCH_POPULAR",
      payload: request
    }
}


// all popular music
// https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&videoCategoryId=10&part=snippet&maxResults=18&key=AIzaSyDzGlcjHMtL3Vx2dE6HuRe4lHRm9U7K8lQ
// all popular music
// https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&videoCategoryId=30&part=snippet&maxResults=18&key=AIzaSyDzGlcjHMtL3Vx2dE6HuRe4lHRm9U7K8lQ


// top 10 songs: https://rss.itunes.apple.com/api/v1/us/itunes-music/top-songs/10/explicit/json
// top 10 movies: https://api.themoviedb.org/3/movie/now_playing?api_key=631627e688738d84a1cae51aa035b23a