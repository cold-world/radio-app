import React from 'react';

const SelectTagMenu = ({ setupApi, setStations }) => {
  const changeTagHandler = (e) => {
    setupApi(e.currentTarget.value).then((data) => setStations(data));
  };
  return (
    <>
      <div>
        <label className='select' htmlFor='slct'>
          <select onChange={changeTagHandler} id='slct' required='required'>
            <option value='' disabled='disabled' selected='selected'>
              Select Genre
            </option>
            <option value='disco'>disco</option>
            <option value='funk'>funk</option>
            <option value='soul'>soul</option>
            <option value='house'>house</option>
            <option value='techno'>techno</option>
            <option value='jazz'>jazz</option>
            <option value='hiphop'>hiphop</option>
            <option value='pop'>pop</option>
            <option value='punk'>punk</option>
            <option value='rock'>rock</option>
            <option value='metal'>metal</option>
            <option value='60s'>60s</option>
            <option value='70s'>70s</option>
            <option value='80s'>80s</option>
            <option value='90s'>90s</option>
            <option value='electro'>electro</option>
          </select>
          <svg>{/* <use xlink:href='#select-arrow-down'></use> */}</svg>
        </label>
        <svg className='sprites'>
          <symbol id='select-arrow-down' viewBox='0 0 10 6'>
            <polyline points='1 1 5 5 9 1'></polyline>
          </symbol>
        </svg>
      </div>
    </>
  );
};

export default SelectTagMenu;
