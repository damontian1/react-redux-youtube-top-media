import React from "react";

const Music = ({topMusic, handleMusicClick}) => {
  // console.log(topMusic[0].artistName)
  // if(props.topMusic != ""){
  //   console.log(props.topMusic[0].artworkUrl100)
  // }

  const renderList = () => {  
   // console.log(props.topMusic[0])
    return topMusic.map((item, i) => {
      return(
        <div key={i} style={{display: "inline-block", width: "275px", height: "250px", overflow: "hidden", margin: "0.3em 0em", padding: "0em 0.5em"}}>
          <a href="#">
            <img onClick={handleMusicClick.bind(null, item.artistName, item.name)} src={item.artworkUrl100} style={{ borderRadius: "4px"}}/>
            <p style={{color: "black"}}>{`#${i+1} | ${item.artistName} - ${item.name}`}</p>
          </a>
        </div>
      )
    })
  }
  // console.log(renderList())
  return(
    <section id="music">
      <div style={{width: "100%",textAlign: "center",}}>
        <div style={{textAlign: "center"}}>
          <h4 style={{fontFamily: "Anton", fontSize: "2em", textAlign: "center"}}>THIS WEEK'S TOP SONGS</h4>
          <small className="highlight">click to watch the music video</small>
        </div>
        <div style={{height: "1155px"}}>
          {renderList()}
        </div>
      </div>
    </section>
  )
}

export default Music;