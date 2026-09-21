import { useState, useEffect } from 'react';

export const useProductos = (categoriaId) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`http://localhost:3000/api/productos/categoria/${categoriaId}`);
        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(result.message || 'Error al comunicarse con la API');
        }

        setProductos(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (categoriaId) {
      fetchProductos();
    }
  }, [categoriaId]);

  return { productos, loading, error };
};