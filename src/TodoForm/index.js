import React from "react";
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

function TodoForm() {

  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }

  const onCancel = () => {
    setOpenModal(false);
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="TodoForm">
      <label className="TodoForm-Label">Escribe tu nuevo TODO</label>
      <textarea
        className="TodoForm-Textarea"
        placeholder="Mi nueva tarea"
        value={newTodoValue}
        onChange={onChange}/>
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={onCancel}
          className="TodoForm-button TodoForm-button--cancel">
            Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add">
            Agregar
        </button>
      </div>
    </form>
  );
}

export { TodoForm }