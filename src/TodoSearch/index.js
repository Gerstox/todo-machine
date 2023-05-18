import React from 'react'
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {

  const {
    searchValue,
    setSearchValue
  } = React.useContext(TodoContext);

  return (
    <div className='CenterBlock'>
      <input
        className="TodoSearch"
        value={searchValue}
        placeholder="¿Cuál producto quieres buscar?"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
    </div>
  );
}

export { TodoSearch }