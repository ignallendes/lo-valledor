import { Router } from 'express';
import { getProductosPorCategoria } from '../controllers/producto.controller.js';

const router = Router();

// Endpoint: GET /api/productos/categoria/1
router.get('/categoria/:categoriaId', getProductosPorCategoria);

export default router;