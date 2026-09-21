import express from 'express'
import cors from 'cors'
import productoRoutes from './routes/producto.route.js';

const app = express()

app.use(cors())
app.use(express.json())

app.get('/',(req, res) => res.json({ok: true, api: 'API lo valledor'}))
app.use('/api/productos', productoRoutes);
const PORT = 3000

app.listen(PORT, () => {
console.log(`API escuchando en http://localhost:${PORT}`)
})