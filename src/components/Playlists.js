import '../App.css';
import React from 'react';
// import dj from '../media/Dj.mp3'

const Playlists = ({title, artist, duration}) => {
    return ( 
        <section className="playlistCollection">
        <div className="playlistCollection__play">  
        <span className="playlistCollection__icon">▶️
{/* <audio className="playlistCollection__icon" src={dj}></audio> */}

        </span>
        </div>
       <div className="playlistCollection__desc">
            <p  className="playlistCollection__title">{title}</p>
            <p  className="playlistCollection__author">{artist}</p>
          </div>
   <div className="playlistCollection__duration">{duration}</div>
    
    </section>
    
     )
}
 
export default Playlists;
