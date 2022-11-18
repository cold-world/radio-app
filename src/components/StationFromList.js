import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRadio } from '@fortawesome/free-solid-svg-icons';

const StationFromList = ({ stations, setCurrentStation }) => {
  return (
    <>
      {stations.map((item) => (
        <div tabIndex={1}
          key={item.id}
          onClick={() => setCurrentStation(item)}
          onKeyDown={() => setCurrentStation(item)}
          className='station-from-list'
        >
          {' '}
          {item.favicon ? (
            <img src={item.favicon} alt={item.name} />
          ) : (
            <FontAwesomeIcon icon={faRadio} size='3x' />
          )}
          <li key={item.id + 1}>{item.name}</li>
        </div>
      ))}
    </>
  );
};

export default StationFromList;
