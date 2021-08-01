import 'reflect-metadata'
import { createConnection, Connection } from 'typeorm'
import { Animal } from './models/Animal'

let connection: Connection;

async function start () {
  connection = await createConnection({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3306', 10),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [Animal],
    synchronize: true,
    logging: false,
  })
}

async function close () {
  if (connection?.isConnected) {
    await connection.close()
  }
}

export {
  connection,
  start,
  close
}