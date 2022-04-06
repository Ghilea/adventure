import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';

const Music = (data) => {
  
  const [playing, setPlaying] = useState(false);
  const [play, {
    stop
  }] = useSound(data.url);

  const audioPlay = () => {
    if(playing){
      stop()
      setPlaying(false);
    }else{
      play()
      setPlaying(true);
    }
  }

  return (
    <button className = 'music'
    onClick = { audioPlay} >
      <img src='assets/images/music_note.svg' />
    </button>
  );
};

export default Music;