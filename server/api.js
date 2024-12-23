import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { router } from './routers/authRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
// Catch-all for undefined routes
app.use((req, res) => {
  res.status(404).send("Route not found");
});
app.use('/auth', router)

app.get('/', (req, res) => {
  res.send('Server is up & running..')
})

export {app}
