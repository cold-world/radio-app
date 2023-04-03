Online radio app.
=======================================

React.

Main goal -> use API to get data and search by tag or name.

* * *
### [Demo](https://cold-world.github.io/radio-app/)

![Alt Text](https://i.ibb.co/KmWTkXq/2.gif)

* * *



### A piece of code

```
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
```

### Download & Installation

```shell 
git clone https://github.com/cold-world/radio-app.git
cd <project dir>
npm install
npm start
```
