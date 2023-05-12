import './TodoCounter.css';

function TodoCounter({ total, completed }) { // Se desestructura el objeto props
  return (
    <h1 className='TodoCounter'>
      Has completado <span>{ completed }</span> de <span>{ total }</span> TODOs.
    </h1>
  );
}

export { TodoCounter }