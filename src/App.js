import { RadioBrowserApi } from 'radio-browser-api';
import { useState, useEffect } from 'react';
import Player from './components/Player';
import Station from './components/Station';
import StationsList from './components/StationsList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [stations, setStations] = useState([]);
  const [currentStation, setCurrentStation] = useState({});
  const [toggleMenu, setToggleMenu] = useState(false);
  const setupApi = async (style = 'disco') => {
    const api = new RadioBrowserApi('Radio App');
    api.setBaseUrl('https://de1.api.radio-browser.info');

    const stations = await api
      .searchStations({
        country: 'The United States Of America',
        language: 'english',
        tag: style,
        limit: 100,
      })
      .then((data) => {
        return data;
      });

    return stations;
  };

  useEffect(() => {
    setupApi().then((data) => {
      setStations(data);
      setCurrentStation(data[0]);
    });
  }, []);

  return (
    <div className='App'>
      <header>
        <h1 className='app-name'>Online Radio</h1>
        {toggleMenu ? (
          <button className='close-menu_btn'>
            <FontAwesomeIcon
              onClick={() => setToggleMenu(false)}
              cursor='pointer'
              size='2xl'
              icon={faClose}
            />
          </button>
        ) : (
          <button
            onClick={() => setToggleMenu(true)}
            className='show-stations_btn'
          >
            Show stations
          </button>
        )}
      </header>
      {currentStation && (
        <>
          <Station currentStation={currentStation} />
          <Player
            currentStation={currentStation}
            setupApi={setupApi}
            setCurrentStation={setCurrentStation}
            stations={stations}
          />
          <StationsList
            stations={stations}
            setupApi={setupApi}
            setStations={setStations}
            setCurrentStation={setCurrentStation}
            toggleMenu={toggleMenu}
          />
        </>
      )}
    </div>
  );
}

export default App;
