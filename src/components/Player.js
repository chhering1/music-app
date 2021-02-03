import AudioPlayer from 'react-h5-audio-player';
import dj from '../media/Dj.mp3'
import 'react-h5-audio-player/lib/styles.css';
const Player = () => {
    return (  
        <AudioPlayer   src={dj}  />
    );
}
 
export default Player;