import React from "react";
import { Consumer } from './Context';
import Spinner from './Spinner';

class Movies extends React.Component {
  render() {
    return (
      <Consumer>
        {props => {
          const renderList = () => {
            return props.topMovies.map((item, i) => {
              return (
                <div key={i}>
                  <a href="#" style={{ color: "black" }}>
                    <img onClick={props.handleMovieClick.bind(null, item.title)} src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "4px", maxHeight: "600px" }} />
                    <p style={{ height: "40px" }}>{`#${i + 1} | ${item.title}`}</p>
                  </a>
                </div>
              )
            })
          }

          return (
            <section id="movies">
              <div style={{ width: "100%", textAlign: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <h4 style={{ fontFamily: "Anton", fontSize: "2em", textAlign: "center" }}>THIS WEEK'S TOP MOVIES</h4>
                  <small className="highlight">click to watch the movie trailer</small>
                </div>
                <div className="movie__posters mt-5">
                  {props.topMovies ? renderList() : <Spinner />}
                </div>
              </div>
            </section>
          )
        }}
      </Consumer>
    )
  }
}

// const Movies = () => {

// return (
//   <Consumer>
//     {props => {
//       // console.log(props.topMovies)
//       const renderList = () => {
//         console.log(props.topMovies.map(item => item + "1"))
//         // return props.topMovies.map((item, i) => {
//         //   return (
//         //     <div key={i} style={{ display: "inline-block", width: "210px", overflow: "scroll", padding: "0.3em 0.3em 1em 0.3em" }}>
//         //       <a href="#" style={{ color: "black" }}>
//         //         <img onClick={handleMovieClick.bind(null, item.title)} src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} style={{ width: "100%", height: "330px", objectFit: "cover", borderRadius: "4px" }} />
//         //         <p style={{ height: "40px" }}>{`#${i + 1} | ${item.title}`}</p>
//         //       </a>
//         //     </div>
//         //   )
//         // })
//       }

//       return (
//         <section id="movies">
//           <div style={{ width: "100%", textAlign: "center" }}>
//             <div style={{ textAlign: "center" }}>
//               <h4 style={{ fontFamily: "Anton", fontSize: "2em", textAlign: "center" }}>THIS WEEK'S TOP MOVIES</h4>
//               <small className="highlight">click to watch the movie trailer</small>
//             </div>
//             <div>
//               {renderList()}
//             </div>
//           </div>
//         </section>
//       )
//     }}
//   </Consumer>
// )

// const renderList = () => {
//   return topMovies.map((item, i) => {
//     return(
//       <div key={i} style={{display: "inline-block", width: "210px", overflow: "scroll", padding: "0.3em 0.3em 1em 0.3em"}}>
//         <a href="#" style={{color: "black"}}>
//           <img onClick={handleMovieClick.bind(null, item.title)} src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} style={{width: "100%", height: "330px",objectFit: "cover", borderRadius: "4px"}}/>
//           <p style={{height: "40px"}}>{`#${i+1} | ${item.title}`}</p>
//         </a>
//       </div>
//     )
//   })
// }
// return(
//   <section id="movies">
//     <div style={{width: "100%",textAlign: "center"}}>
//       <div style={{textAlign: "center"}}>
//         <h4 style={{fontFamily: "Anton", fontSize: "2em", textAlign: "center"}}>THIS WEEK'S TOP MOVIES</h4>
//         <small className="highlight">click to watch the movie trailer</small>
//       </div>
//       <div>
//         {renderList()}
//       </div>
//     </div>
//   </section>
// )
// }

export default Movies;