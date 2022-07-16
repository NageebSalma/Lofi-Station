import React from 'react';

const PlayerDetails = (props) => {
    return (
        <div className='player_details'>
            {/* <img 
            src={props.song.img_src}
            alt={props.song.title}
            height='200px'
            width='200px'
            /> */}

            <h2>{props.song.title}</h2>
            <h4>{props.song.artist}</h4>
        </div>
    );
};

export default PlayerDetails;