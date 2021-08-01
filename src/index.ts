import * as dotenv from 'dotenv'
import 'reflect-metadata'
import * as db from './db'
import * as api from './api'

dotenv.config()

async function main() {
  try {
    await db.start()
    await api.start()
  } catch (error) {
    console.log(error)
    api.close()
    db.close()
  }
}

process.on('SIGINT', async () => {
  await api.close()
  await db.close()
})

process.on('SIGTERM', async () => {
  await api.close()
  await db.close()
})

main()
