import express from 'express';
import { StarWarController } from './controller';

const starWarController = new StarWarController();

const router = express.Router();

router.get('/', async(req, res) => {
   const result = await starWarController.getAll();
   res.json(result);
})

router.get('/:id', async(req, res) => {
  const id = req.params.id;
  const result = await starWarController.getOne(id);
  res.json(result);
})

export { router };