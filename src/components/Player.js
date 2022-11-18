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

const Player = ({ currentStation, setCurrentStation, stations }) => {
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
  const nextStationHandler = () => {
    const currentIndex = stations.indexOf(
      stations.find((item) => item.id === currentStation.id)
    );
    if (currentIndex === -1) setCurrentStation(stations[0]);
    else if (currentIndex < stations.length - 1)
      setCurrentStation(stations[currentIndex + 1]);
    else setCurrentStation(stations[0]);
  };

  const prevStationHandler = () => {
    const currentIndex = stations.indexOf(
      stations.find((item) => item.id === currentStation.id)
    );
    if (currentIndex === -1) setCurrentStation(stations[0]);
    else if (currentIndex !== 0) setCurrentStation(stations[currentIndex - 1]);
    else setCurrentStation(stations[stations.length - 1]);
  };

  return (
    <>
      <dir className='player-container'>
        <audio
          autoPlay={true && !ispaused}
          ref={audio}
          src={currentStation.url}
        ></audio>
        <div className='volume-control'>
          <FontAwesomeIcon icon={faVolumeUp} />
          <input type='range' onChange={volumeHandler} />
        </div>
        <div className='player-control'>
          <button onClick={prevStationHandler}>
            <FontAwesomeIcon cursor='pointer' size='xl' icon={faBackwardStep} />
          </button>

          {ispaused ? (
            <button onClick={playHandler}>
              <FontAwesomeIcon cursor='pointer' size='xl' icon={faPlay} />
            </button>
          ) : (
            <button onClick={pauseHandler}>
              <FontAwesomeIcon cursor='pointer' size='xl' icon={faPause} />
            </button>
          )}
          <button onClick={nextStationHandler}>
            <FontAwesomeIcon cursor='pointer' size='xl' icon={faForwardStep} />
          </button>
        </div>
      </dir>
    </>
  );
};

export default Player;
