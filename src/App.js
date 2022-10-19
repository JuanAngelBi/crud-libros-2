//Componentes
import ButtonActualizar from './components/btnActualizar';
import ButtonAgregar from './components/btnAgregar';
import ButtonEliminar from './components/btnEliminar';
import Tabla from './components/Tabla';

function App() {
  return (
    <>
      <h2 className='bg-info text-dark border rounded border-dark'>CRUD Libros</h2>
      <div className='border rounded border-dark bg-info'>
        <div className="container text-center my-4">
          <div className='row'>
            <div className='col'><ButtonAgregar></ButtonAgregar></div>
            <div className='col'><ButtonEliminar></ButtonEliminar></div>
            <div className='col'><ButtonActualizar></ButtonActualizar></div>
          </div>
        </div>
        <div className="w-75 mx-auto"><Tabla></Tabla></div>
      </div>
    </>
  );
}

export default App;
