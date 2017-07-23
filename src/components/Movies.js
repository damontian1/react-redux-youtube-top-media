import React from "react";

const Movies = ({topMovies, handleMovieClick}) => {
  // console.log(topMovies)
  // poster_path
  // title

  const renderList = () => {  
    return topMovies.map((item, i) => {
      return(
        <div key={i} style={{display: "inline-block", width: "210px", overflow: "scroll", padding: "0.3em 0.3em 4em 0.3em"}}>
          <a href="#">
            <img onClick={handleMovieClick.bind(null, item.title)} src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} style={{width: "100%", height: "330px",objectFit: "cover", borderRadius: "4px"}}/>
          </a>
          <p>{`#${i+1} | `}</p>
        </div>
      )
    })
  }
  return(
    <section id="movies">
      <div style={{width: "100%",textAlign: "center"}}>
        <div style={{textAlign: "center"}}>
          <h4 style={{fontFamily: "Anton", fontSize: "2em", textAlign: "center"}}>THIS WEEK'S TOP MOVIES</h4>
          <small className="highlight">click to watch the movie trailer</small>
        </div>
        <div>
          {renderList()}
        </div>
      </div>
    </section>
  )
}

export default Movies;