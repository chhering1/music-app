import '../App.css';
import { Link } from 'react-router-dom';
import image from '../img/sound-wave.jpg';
import AudioPlayer from 'react-h5-audio-player';
import she from '../media/She.mp3';
import genda from '../media/Genda.mp3';
import mercy from '../media/Mercy.mp3';
import basanti from '../media/basanti.mp3';
import nayan from '../media/Nayan.mp3';
import Localbase from 'localbase'
import 'react-h5-audio-player/lib/styles.css';
import Collapsible from 'react-collapsible'


const Home = () => {

  let db = new Localbase('db');

  const addNewSong =  (e) => {
    db.collection('songs').add({
      id:Date.now(),
      name: e.target.dataset.songname,
      url:e.target.dataset.songurl
    })
  };

    return ( 
        <div className="App">
            <img className="svg"  src={image} alt="" width="100%" height="auto" /> 
          <main className="main">
            
               <h1 className="title">"MUSIC IS A PIECE OF ART THAT GOES IN THE EARS STREIGHT TO THE HEART"</h1>
          </main>
 <br/>
          <Collapsible trigger="🎵 Random songs" className="collapse">
            
              <ul>

                 <li>
                   <h5>song 1</h5>
                   <button onClick={addNewSong} data-songname='song 1' data-songurl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3">add to playlist</button>
                   <AudioPlayer  src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
                 </li>

                 <li>
                   <h5>song 2</h5>
                   <button onClick={addNewSong} data-songname='song 2' data-songurl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3">add to playlist</button>
                   <AudioPlayer   src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" />
                  </li>

                  <li>
                   <h5>song 3</h5>
                   <button onClick={addNewSong} data-songname='song 3' data-songurl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3">add to playlist</button>
                   <AudioPlayer    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" />
                  </li>
                
              </ul>
              </Collapsible>
        

          <Collapsible trigger="🎵 Badshah songs" className="collapse">
        <div className="songs-lists">
              <h4>She move it like</h4>
          <button onClick={addNewSong}  data-songname='She move it like' data-songurl={she}>Add to playlist</button>
              <AudioPlayer    src={she} />
         </div>

        <div className="songs-lists">
            <h4>Mercy Me</h4>
          <button onClick={addNewSong}  data-songname='Mercy me' data-songurl={mercy}>Add to playlist</button>
          <AudioPlayer   src={mercy} />
        </div>

        <div className="songs-lists extra">
            <h4>Genda Phool</h4>
          <button onClick={addNewSong}  data-songname='Genda phool' data-songurl={genda}>Add to playlist</button>
          <AudioPlayer   src={genda} />
        </div>
        </Collapsible>
      

        <Collapsible trigger="🎵 Vishal-dadlani songs" className="collapse">
        <div className="songs-lists ">
            <h4>Basanti</h4>
          <button onClick={addNewSong}  data-songname='basanti' data-songurl={basanti}>Add to playlist</button>
          <AudioPlayer   src={basanti} />
        </div>
        
        
        
        <div className="songs-lists ">
            <h4>Nayan</h4>
          <button onClick={addNewSong}  data-songname='nayan' data-songurl={nayan}>Add to playlist</button>
          <AudioPlayer   src={nayan} />
        </div>
      
        </Collapsible>
          
          <nav>
                      <Link to="/" className="Link">  Home</Link>
                      <Link to="/playlists"  className="Link"> Offline-Playlist </Link>
                      <Link to="/songs"  className="Link"> All songs </Link>

        </nav>

      </div>
     );
}
 
export default Home;