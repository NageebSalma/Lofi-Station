import React,{useState,useRef,useEffect} from 'react';
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";
import playlist from './playlist.js'
const Player = (props) => {
    
    const audioElement = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [songs , setSongs] = useState(playlist()) 
    
    useEffect(() => {
        if (isPlaying) {
            audioElement.current.play();
        } else {
            audioElement.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = songs.length - 1;
                }

                return temp;
            });
        }
    }
    let s =songs[props.currentSongIndex].src
  
    return (
    <div className = 'player'>
        <audio src={s} ref={audioElement}></audio>
        <PlayerDetails song={songs[props.currentSongIndex]} />
        <PlayerControls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          SkipSong={SkipSong}
        />
        <h3 className='affirmation'>{props.affirmation}</h3>
        </div>
    );
};

export default Player;