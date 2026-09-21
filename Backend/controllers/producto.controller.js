import { obtenerProductosPorCategoriaService } from '../services/producto.service.js';

export const getProductosPorCategoria = async (req, res) => {
  try {
    const { categoriaId } = req.params;

    // Validación de la entrada (evitamos consultar la BD si el parámetro no es válido)
    if (!categoriaId || isNaN(categoriaId)) {
      return res.status(400).json({
        success: false,
        message: 'El id de la categoría debe ser un número entero válido.'
      });
    }

    const productos = await obtenerProductosPorCategoriaService(Number(categoriaId));

    return res.status(200).json({
      success: true,
      data: productos
    });
  } catch (error) {
    console.error('Error en getProductosPorCategoria:', error);
    return res.status(500).json({
      success: false,
      message: 'Error interno al consultar la base de datos',
      error: error.message
    });
  }
};