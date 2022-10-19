import './App.css';
//Componentes
import ButtonActualizar from './components/btnActualizar';
import ButtonAgregar from './components/btnAgregar';
import ButtonEliminar from './components/btnEliminar';
import Tabla from './components/Tabla';

function App() {
  return (
    <>
      <div className="container text-center my-4">
        <div className='row'>
          <div className='col'><ButtonAgregar /></div>
          <div className='col'><ButtonEliminar /></div>
          <div className='col'><ButtonActualizar /></div>
        </div>
      </div>
      <div className="w-75 mx-auto"><Tabla /></div>
    </>
  );
}

export default App;
