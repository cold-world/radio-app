import React from 'react';

const Station = ({ currentStation }) => {
  return (
    <>
      {currentStation && (
        <div className='station-container'>
          <h1 className='station-name'>{currentStation.name}</h1>
          <p className='station-descr'>
            country: {currentStation.country} / bitrate:{' '}
            {currentStation.bitrate}
          </p>
          {currentStation.favicon ? (
            <img src={currentStation.favicon} alt={currentStation.name} />
          ) : (
            ''
          )}
        </div>
      )}
    </>
  );
};

export default Station;
