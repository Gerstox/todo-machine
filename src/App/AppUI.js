import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoCreateButton } from '../TodoCreateButton';

function AppUI({
  loading,
  error,
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo
}) {
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
        { loading && <p>Estamos cargando...</p> }
        { error && <p>Ocurrió un error...</p> }
        { (!loading && searchedTodos.length == 0) && <p>¡Crea tu primer TODO!</p> }

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

export { AppUI }