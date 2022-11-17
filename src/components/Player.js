import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faVolumeUp,
  faForwardStep,
  faBackwardStep,
  faPause,
} from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';

const Player = ({ currentStation }) => {
  const [ispaused, setIspaused] = useState(true);
  const audio = useRef(null);
  const playHandler = () => {
    if (currentStation) {
      audio.current.play();
      setIspaused(false);
    }
  };
  const pauseHandler = () => {
    audio.current.pause();
    setIspaused(true);
  };

  const volumeHandler = (e) => {
    audio.current.volume = e.currentTarget.value / 100;
  };
  return (
    <>
      <dir className='player-container'>
        <audio ref={audio} src={currentStation.url}></audio>
        <div className='volume-control'>
          <FontAwesomeIcon icon={faVolumeUp} />
          <input type='range' onChange={volumeHandler} />
        </div>
        <div className='player-control'>
          <FontAwesomeIcon cursor='pointer' size='lg' icon={faBackwardStep} />
          {ispaused ? (
            <FontAwesomeIcon
              cursor='pointer'
              size='lg'
              onClick={playHandler}
              icon={faPlay}
            />
          ) : (
            <FontAwesomeIcon
              cursor='pointer'
              size='lg'
              icon={faPause}
              onClick={pauseHandler}
            />
          )}
          <FontAwesomeIcon cursor='pointer' size='lg' icon={faForwardStep} />
        </div>
      </dir>
    </>
  );
};

export default Player;
