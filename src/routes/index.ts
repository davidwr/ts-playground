import * as express from 'express'
import { router as animalRouter } from './animal'

const router = express.Router()

router.use('/animal/', animalRouter)

export { router }
