import '../App.css';
import { Link } from 'react-router-dom';
import image from '../img/sound-wave.jpg';
import AudioPlayer from 'react-h5-audio-player';
import dj from '../media/Dj.mp3';
import she from '../media/She.mp3';
import genda from '../media/Genda.mp3';
import mercy from '../media/Mercy.mp3';

import 'react-h5-audio-player/lib/styles.css';
const Home = () => {

    return ( 
        <div className="App">
          <main className="main">
            <img className="svg"  src={image} alt="" width="100%" height="auto" /> 
                 <h1 className="title">My top 10 playlists</h1>
          </main>

      <div className="songs-lists">
          <h4>Dj waley Babu </h4>
          <AudioPlayer  autoPlay  src={dj} />
          </div>

        <div className="songs-lists">
              <h4>She move it like</h4>
              <AudioPlayer  autoPlay  src={she} />
      </div>

        <div className="songs-lists">
            <h4>Mercy Me</h4>
            <AudioPlayer  autoPlay  src={mercy} />
        </div>

        <div className="songs-lists extra">
            <h4>Genda Phool</h4>
            <AudioPlayer  autoPlay  src={genda} />
        </div>
          
          <nav>
                      <Link to="/" className="Link">  homepage</Link>
                      <Link to="/page"  className="Link"> subpage </Link>
        </nav>
        
      </div>
     );
}
 
export default Home;