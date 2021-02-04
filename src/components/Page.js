import {Link } from 'react-router-dom';
import AudioPlayer from 'react-h5-audio-player';
import Localbase from 'localbase'
import 'react-h5-audio-player/lib/styles.css';
import { useState,useEffect } from 'react';
import '../App.css';

const Page = () => {
    let db = new Localbase('db');
   
    const [data, setData ] = useState('')

     useEffect(() => {
        let db = new Localbase('db');
           db.collection('songs').get().then( res => setData(res))
    }, [setData]);

    const removeSong =  (e) => {
        console.log(e.target.dataset.song)
        db.collection('songs').doc({
            name : e.target.dataset.song
    }).delete();
    window.location.reload();
      }
    
  console.log(data)

     return (  
         <div className="playlist-page">
          

             <h3>Here is your Offline playlist</h3>
             
             <ul>
               {data && data.map( (item) => (
                    <li key={item.id}>
                       <h4>{item.name}</h4>
                       <AudioPlayer src={item.url}/>
                       <button onClick={removeSong} data-song={item.name}>remove from playlist</button>
                     </li>
               ))}   
             </ul>

             <nav>
                      <Link to="/" className="Link">  Home</Link>
                      <Link to="/playlists"  className="Link"> Offline-Playlist </Link>
                      <Link to="/songs"  className="Link"> All songs </Link>

        </nav>
         </div>
     );
 }
  
 export default Page;