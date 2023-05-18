import { ReactComponent as HeaderComponent } from '../minimarket-logo.svg';
import './MiniHeader.css'

function MiniHeader() {
  return (
    <>
      <div className='MainHeader'>
        <HeaderComponent className="" />
        <p>Todos tus productos en un solo lugar</p>
      </div>
      <hr className='Divisor'/>
      {/* <div className='Cards'>
        <div className='Cards-Item'>
          <span>Nombre</span>
          <p>Description corta</p>
          <span>Precio</span>
          <div>En oferta</div>
          <div className='Cards-Buttons'>
            <span>C</span>
            <span>E</span>
            <span>F</span>
          </div>
        </div>
        <div className='Cards-Item'>
          <span>Nombre</span>
          <p>Description corta</p>
          <span>Precio</span>
          <div>En oferta</div>
          <div className='Cards-Buttons'>
            <span>C</span>
            <span>E</span>
            <span>F</span>
          </div>
        </div>
        <div className='Cards-Item'>
          <span>Nombre</span>
          <p>Description corta</p>
          <span>Precio</span>
          <div>En oferta</div>
          <div className='Cards-Buttons'>
            <span>C</span>
            <span>E</span>
            <span>F</span>
          </div>
        </div>
        <div className='Cards-Item'>
          <span>Nombre</span>
          <p>Description corta</p>
          <span>Precio</span>
          <div>En oferta</div>
          <div className='Cards-Buttons'>
            <span>C</span>
            <span>E</span>
            <span>F</span>
          </div>
        </div>
        <div className='Cards-Item'>
          <span>Nombre</span>
          <p>Description corta</p>
          <span>Precio</span>
          <div>En oferta</div>
          <div className='Cards-Buttons'>
            <span>C</span>
            <span>E</span>
            <span>F</span>
          </div>
        </div>
      </div> */}
    </>
  );
}

export { MiniHeader }