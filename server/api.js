import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import helmet from 'helmet';
import {router} from './routers/authRoutes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(helmet());
app.use(
  express.urlencoded({
    extended: true,
  })
)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, "build")));

// Catch-all handler to serve the index.html for all routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html")); 
});

app.use('/auth', router)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173') // Adjust to match your frontend origin
  res.header('Access-Control-Allow-Credentials', 'true')
  next()
})

// Catch-all for undefined routes - should be last
app.use((req, res) => {
  res.status(404).send('Route not found')
})

// Handle errors globally (if you add an error handler later)
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(500).json({message: err.message})
})

app.get('/', (req, res) => {
  res.send('Server is up & running..')
})

export {app}
