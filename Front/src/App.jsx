import { useState } from 'react';
import { ListaProductos } from './components/ListaProductos';
import './App.css';

function App() {
  const [categoriaId, setCategoriaId] = useState(1);

  return (
    <div className="app-main">
      <h1>Sistema de Gestión de Productos</h1>
      <p>Desafío Técnico — Consumo de Stored Procedure (SQL Server)</p>

      <div className="selector-container">
        <label htmlFor="categoria-select">Seleccionar Categoría: </label>
        <select 
          id="categoria-select" 
          value={categoriaId} 
          onChange={(e) => setCategoriaId(Number(e.target.value))}
        >
          <option value={1}>Categoría 1</option>
          <option value={2}>Categoría 2</option>
          <option value={3}>Categoría 3</option>
        </select>
      </div>

      <hr />

      {/* Renderizado del componente visual de productos */}
      <ListaProductos categoriaId={categoriaId} />
    </div>
  );
}

export default App;