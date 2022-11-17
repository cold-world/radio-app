import { RadioBrowserApi } from 'radio-browser-api';
import { useState, useEffect } from 'react';
import Player from './components/Player';
import Station from './components/Station';

function App() {
  const [stations, setStations] = useState([]);
  const [currentStation, setCurrentStation] = useState({});
  const setupApi = async () => {
    const api = new RadioBrowserApi('My Radio App');

    const stations = await api
      .searchStations({
        language: 'english',
        tag: 'disco',
        limit: 10,
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
      <Station currentStation={currentStation} />
      <Player currentStation={currentStation} />
    </div>
  );
}

export default App;
