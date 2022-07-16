import React , {useState,useEffect} from 'react';

import Player from './components/Player.jsx';
import './App.css'
const App = () => {
  const [currentSongIndex,setCurrentSongIndex] = useState(0);
  const [data, setData] = React.useState(null);
  const [nextSongIndex,setNextSongIndex] = useState(currentSongIndex);

  const backgrounds = [
    'https://cdnb.artstation.com/p/assets/images/images/029/320/295/original/bogdan-mb0sco-coffeeanim.gif?1601147277',
    'https://www.icegif.com/wp-content/uploads/2021/09/icegif-2.gif',
    'https://thumbs.gfycat.com/AcceptableGreedyDutchsmoushond-size_restricted.gif',
    'https://thumbs.gfycat.com/BrilliantWhiteDoctorfish-size_restricted.gif',
    'https://64.media.tumblr.com/7931e97031b430d11b23dfb4a5ca6713/df1a98e7c47a2bff-70/s640x960/26aef91dd548ae2cb09903fe25908ed14d13f267.gifv',
    'https://64.media.tumblr.com/83e6190d1e2c8bb9b7468b1d10ddfed3/tumblr_owjskzld2Z1rnbw6mo1_1280.gifv',
    'https://i.gifer.com/BkCU.gif'

  ]

  useEffect(() => {
    const intervalId = setInterval(() => {  
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.affirmation));
    }, 20000)
    return () => clearInterval(intervalId);
  }, []);


  // useEffect(()=>{
  //   setNextSongIndex(()=>{
  //     // console.log(currentSongIndex)
  //     if (currentSongIndex + 1 > songs.length - 1 )return 0;
  //     else return currentSongIndex + 1;
  //   });
  // }, [currentSongIndex, songs.length]) ;


  return (
    <div className='app'>
    <img className='background' 
    src= {backgrounds[Math.trunc(Math.random()*backgrounds.length)]}
    alt='https://64.media.tumblr.com/83e6190d1e2c8bb9b7468b1d10ddfed3/tumblr_owjskzld2Z1rnbw6mo1_1280.gifv'></img>
    
    <div className ='player-box'>
    <Player currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} nextSongIndex={nextSongIndex} affirmation={data}/> 
    </div>

    </div>
  );
};

export default App;