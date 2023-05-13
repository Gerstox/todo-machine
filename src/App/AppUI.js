import React from 'react';

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoCreateButton } from '../TodoCreateButton';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';

import { TodoContext } from '../TodoContext';

function AppUI() {

  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />

        <TodoList>
          { loading && (
            <>
              <TodosLoading />
              <TodosLoading />
              <TodosLoading />
            </>
            )
          }
          { error && <TodosError /> }
          { (!loading && searchedTodos.length === 0) && <EmptyTodos /> }

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

      { openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

    </>
  );
}

export { AppUI }