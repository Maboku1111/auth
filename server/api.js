import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { router } from './routers/authRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/auth', router);

// Catch-all for undefined routes - should be last
app.use((req, res) => {
  res.status(404).send("Route not found");
});

// Handle errors globally (if you add an error handler later)
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.get('/', (req, res) => {
  res.send('Server is up & running..')
})

export {app}
