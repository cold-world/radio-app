import React from 'react';
import StationFromList from './StationFromList';

import SelectTagMenuCountry from './SelectTagMenu';

const StationsList = ({
  stations,
  setupApi,
  setStations,
  setCurrentStation,
  toggleMenu,
}) => {
  return (
    <>
      <div className={`stations-list ${toggleMenu ? 'stations-active' : ''}`}>
        <div className='stations-menu'>
          <SelectTagMenuCountry setupApi={setupApi} setStations={setStations} />
        </div>
        <div>
          <ul>
            <StationFromList
              stations={stations}
              setCurrentStation={setCurrentStation}
              setupApi={setupApi}
              setStations={setStations}
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default StationsList;
