import '../App.css';
import { Link } from 'react-router-dom';
import image from '../img/sound-wave.jpg';
import AudioPlayer from 'react-h5-audio-player';
import dj from '../media/Dj.mp3';
import she from '../media/She.mp3';
import genda from '../media/Genda.mp3';
import mercy from '../media/Mercy.mp3';
import anthem from '../media/anthem.mp3';
import basanti from '../media/basanti.mp3';
import bulleya from '../media/bulleya.mp3';
import dance from '../media/dance.mp3';
import drama from '../media/drama.mp3';
import ghungroo from '../media/ghungroo.mp3';
import kurbaan from '../media/kurbaan.mp3';
import luvstory from '../media/luvstory.mp3';
import mileya from '../media/mileya.mp3';
import nashe from '../media/nashe.mp3';
import nayan from '../media/Nayan.mp3';
import patola from '../media/patola.mp3';
import radha from '../media/radha.mp3';
import tumeri from '../media/tumeri.mp3';
import vele from '../media/vele.mp3';
import we from '../media/we.mp3';



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
 <br/> <br/>
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
           <br/> <br/>
          <Collapsible trigger="🎵 Badshah songs" className="collapse">
      <div className="songs-lists">
          <h4>Dj waley Babu </h4>
          <button onClick={addNewSong}  data-songname='DJ waley babu' data-songurl={dj}>Add to playlist</button>
          <AudioPlayer    src={dj} />
          </div>

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
         <br/> <br/>

        <Collapsible trigger="🎵 Vishal-dadlani songs" className="collapse">

        <div className="songs-lists ">
            <h4>Anthem</h4>
          <button onClick={addNewSong}  data-songname='Anthem' data-songurl={anthem}>Add to playlist</button>
          <AudioPlayer   src={anthem} />
        </div>
        <div className="songs-lists ">
            <h4>Basanti</h4>
          <button onClick={addNewSong}  data-songname='basanti' data-songurl={basanti}>Add to playlist</button>
          <AudioPlayer   src={basanti} />
        </div>
        <div className="songs-lists ">
            <h4>Bulleya</h4>
          <button onClick={addNewSong}  data-songname='Bulleya' data-songurl={bulleya}>Add to playlist</button>
          <AudioPlayer   src={bulleya} />
        </div>
        <div className="songs-lists ">
            <h4>Dance</h4>
          <button onClick={addNewSong}  data-songname='dance' data-songurl={dance}>Add to playlist</button>
          <AudioPlayer   src={dance} />
        </div>
        <div className="songs-lists ">
            <h4>Drama</h4>
          <button onClick={addNewSong}  data-songname='drama' data-songurl={drama}>Add to playlist</button>
          <AudioPlayer   src={drama} />
        </div>
        <div className="songs-lists ">
            <h4>Ghungroo</h4>
          <button onClick={addNewSong}  data-songname='ghungroo' data-songurl={ghungroo}>Add to playlist</button>
          <AudioPlayer   src={ghungroo} />
        </div>
        <div className="songs-lists ">
            <h4>Kurbaan</h4>
          <button onClick={addNewSong}  data-songname='kurbaan' data-songurl={kurbaan}>Add to playlist</button>
          <AudioPlayer   src={kurbaan} />
        </div>
        <div className="songs-lists">
            <h4>Love story</h4>
          <button onClick={addNewSong}  data-songname='luvstory' data-songurl={luvstory}>Add to playlist</button>
          <AudioPlayer   src={luvstory} />
        </div>
        <div className="songs-lists">
            <h4>Mileya</h4>
          <button onClick={addNewSong}  data-songname='mileya' data-songurl={mileya}>Add to playlist</button>
          <AudioPlayer   src={mileya} />
        </div>
        <div className="songs-lists ">
            <h4>Nashe</h4>
          <button onClick={addNewSong}  data-songname='nashe' data-songurl={nashe}>Add to playlist</button>
          <AudioPlayer   src={nashe} />
        </div>
        <div className="songs-lists ">
            <h4>Nayan</h4>
          <button onClick={addNewSong}  data-songname='nayan' data-songurl={nayan}>Add to playlist</button>
          <AudioPlayer   src={nayan} />
        </div>
        <div className="songs-lists">
            <h4>Patola</h4>
          <button onClick={addNewSong}  data-songname='patola' data-songurl={patola}>Add to playlist</button>
          <AudioPlayer   src={patola} />
        </div>
        <div className="songs-lists ">
            <h4>Radha</h4>
          <button onClick={addNewSong}  data-songname='radha' data-songurl={radha}>Add to playlist</button>
          <AudioPlayer   src={radha} />
        </div>
        <div className="songs-lists ">
            <h4>Tu meri</h4>
          <button onClick={addNewSong}  data-songname='tumeri' data-songurl={tumeri}>Add to playlist</button>
          <AudioPlayer   src={tumeri} />
        </div>
        <div className="songs-lists ">
            <h4>Vele</h4>
          <button onClick={addNewSong}  data-songname='vele' data-songurl={vele}>Add to playlist</button>
          <AudioPlayer   src={vele} />
        </div>
        <div className="songs-lists">
            <h4>We</h4>
          <button onClick={addNewSong}  data-songname='we' data-songurl={we}>Add to playlist</button>
          <AudioPlayer   src={we} />
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