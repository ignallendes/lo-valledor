import { sql, getConnection } from '../config/db.js';

export const obtenerProductosPorCategoriaService = async (categoriaId) => {
  const pool = await getConnection();

  // Invocación del Stored Procedure
  const result = await pool.request()
    .input('CategoriaId', sql.Int, categoriaId) // Asigna @CategoriaId INT
    .execute('sp_ObtenerProductosPorCategoria'); // Ejecuta el SP

  // result.recordset contiene las filas que retornó la consulta SQL
  return result.recordset;
};