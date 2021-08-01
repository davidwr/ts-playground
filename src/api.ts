import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import * as http from 'http';

let server: http.Server

async function start() {
  const app = express()
  app.use(helmet())
  app.use(cors())
  app.use(express.json())

  app.get('/', (req, res) => {
    res.send('Hello World David W Rigamonte')
  })
  const port = process.env.PORT || 3000
  server = app.listen(port, () => console.log('App listening!'))
}

async function close() {
  server.close()
}

export { start, close }