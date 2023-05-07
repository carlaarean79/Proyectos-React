import FreeCodeCamp_logo from './imagenes/FreeCodeCamp_logo.jpg'
import './App.css';
import Boton from './Componentes/Boton'

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor' >
        <img 
          src= {FreeCodeCamp_logo}
          className='freecodecamp-logo'
          alt='Logo de freecodecamp' />
      </div>
      <div className='contenedor-calculadora'>
      <div className='fila'>
        <Boton>1</Boton>
        <Boton>+</Boton>
      </div>
      <div className='fila'></div>
      <div className='fila'></div>
      <div className='fila'></div>
      <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
