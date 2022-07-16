import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

const PlayerControls = (props) => {
    return (
    <div className='player_controls'>
        <button className="skip-btn" onClick={() => props.SkipSong(false)}>
            <FontAwesomeIcon icon={faBackward} size="3x"/>
        </button>

        <button className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
           <FontAwesomeIcon icon={props.isPlaying ? faPause: faPlay} size="3x"/>
        </button>

        <button className="skip-btn" onClick={() => props.SkipSong()}>
           <FontAwesomeIcon icon={faForward} size="3x"/>
        </button>
    </div>
    );
};

export default PlayerControls;