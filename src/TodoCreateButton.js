import './TodoCreateButton.css';

function TodoCreateButton() {
  return (
    <button
      className="TodoCreateButton"
      onClick={(e) => {
        console.log('Le diste click!');
        console.log(e);
        console.log(e.target);
        }}>
        +
    </button>
    );
}

export { TodoCreateButton }