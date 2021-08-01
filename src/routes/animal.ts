import * as express from 'express'
import { Animal } from '../models/Animal'
import { connection } from '../db'

const router = express.Router()

router.get('/:id', async (req, res, next) => {
  const repository = connection.getRepository(Animal)
  const animal = await repository.findOne(req.params.id)
  res.json(animal)
})

export { router }
