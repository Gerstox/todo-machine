// import logo from './platzi.webp';

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoCreateButton } from '../TodoCreateButton';
import { useLocalStorage } from './useLocalStorage';

import React from 'react';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Lavar', completed: true },
//   { text: 'Ir al cine', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

function App() {


  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (todoIndex) => {
    const newTodos = [...todos];
    // Colocar text como parámetro
    // const todoIndex = newTodos.findIndex(
    //   (todo) => todo.text === text
    // );
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };


  const deleteTodo = (todoIndex) => {
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    // React.Fragment, se usa para poder retornar sin necesidad de usar div
    //<React.Fragment>
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        { searchedTodos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(index)}
            onDelete={() => deleteTodo(index)}/>
        ))}
      </TodoList>

      <TodoCreateButton/>

    </>
    //</React.Fragment>
  );
}

export default App;
