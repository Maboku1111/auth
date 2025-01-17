import http from 'http'
import {app} from './api.js'
import {connectToDB} from './database/dbConfig.js'
import dotenv from 'dotenv';
dotenv.config();

const PORT = 3000

const server = http
  .createServer(app)
  .listen(PORT, async () => {
    await connectToDB();
    console.log(`Server is running at ${PORT}`);
  })
  .on('error', () => {
    throw new Error()
  })

console.log('Server is up & running: ' + JSON.stringify(server))
