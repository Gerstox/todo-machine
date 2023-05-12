import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
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

    </>
    //</React.Fragment>
  );
}

export { AppUI }