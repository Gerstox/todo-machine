import React from 'react'

import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {

  return (
    <input
      className="TodoSearch"
      value={searchValue}
      placeholder="Cortar cebolla"
      onChange={(e) => {
        setSearchValue(e.target.value);
      }}
    />
  );
}

export { TodoSearch }