import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

import dalleRoutes from './routes/dalle.routes.js'

dotenv.config()

const origin = ['https://3d-website-ai.netlify.app/', 'http://localhost:5173']

const app = express()

app.use(cors())
app.set('trust proxy', 1)
app.use(cors({ origin, credentials: true }))

app.use(express.json({ limit: '50mb' }))

app.use('/api/v1/dalle', dalleRoutes)

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from DALL.E' })
})

app.listen(8080, () => console.log('Server has started on port 8080'))
