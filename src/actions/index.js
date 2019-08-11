import axios from "axios";

export const fetchVideos = (query) => {
  const request =
  axios
    .get(`https://www.googleapis.com/youtube/v3/search?q=${query}&part=snippet&maxResults=6&key=AIzaSyDzGlcjHMtL3Vx2dE6HuRe4lHRm9U7K8lQ`)

  return { type: "FETCH_VIDEOS", payload: request };
};

export const fetchTopMusic = () => {
  const request =
  axios
    .get(`https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/us/itunes-music/top-songs/all/10/explicit.json`)
  return { type: "FETCH_TOP_MUSIC", payload: request };
  // console.log(request)
};

export const fetchTopMovies = () => {
  const request =
  axios
    .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=631627e688738d84a1cae51aa035b23a`)
  return {
    type: "FETCH_TOP_MOVIES",
    payload: request
  };
}