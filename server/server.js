import http from 'http'
import {app} from './api.js'
import {connectToDB} from './database/dbConfig.js'

const PORT = 3000

const server = http
  .createServer(app)
  .listen(PORT, async () => {
    console.log(`Server is running at ${PORT}`)
    await connectToDB()
  })
  .on('error', () => {
    throw new Error()
  })

console.log('Server is up & running: ' + JSON.stringify(server))
