import express, { json } from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/',(req, res) => res.json({ok: true, api: 'API lo valledor'}))

const PORT = 3000

app.listen(PORT, () => {
console.log(`API escuchando en http://localhost:${PORT}`)
})