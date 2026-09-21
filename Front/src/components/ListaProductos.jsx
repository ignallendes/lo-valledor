import React from 'react';
import { useProductos } from '../hooks/useProductos';
import './ListaProductos.css';

export const ListaProductos = ({ categoriaId }) => {
  const { productos, loading, error } = useProductos(categoriaId);

  if (loading) {
    return <p className="productos-loading">⏳ Cargando productos desde SQL Server...</p>;
  }

  if (error) {
    return <div className="productos-error">⚠️ Error: {error}</div>;
  }

  if (!productos || productos.length === 0) {
    return <p>No se encontraron productos para la categoría #{categoriaId}.</p>;
  }

  return (
    <div className="productos-container">
      <h2>Productos (Categoría #{categoriaId})</h2>
      <table className="productos-tabla">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.Id}>
              <td>{producto.Id}</td>
              <td>{producto.Nombre}</td>
              <td>${producto.Precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};