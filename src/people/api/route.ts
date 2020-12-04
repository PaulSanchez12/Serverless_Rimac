import express from 'express';
import { PeopleController } from './controller';
import { IPeople } from '../entities/people';

const peopleController = new PeopleController();

const router = express.Router();

router.post('/', async(req, res) => {
  const {
    nombre,
    altura,
    peso,
    color_cabello,
    color_piel,
    color_ojos,
    anio_nacimiento,
    genero,
  } = req.body;
  
  const people: IPeople = {
    nombre,
    altura,
    peso,
    color_cabello,
    color_piel,
    color_ojos,
    anio_nacimiento,
    genero,
  }

  const result = await peopleController.insert(people);
  res.json(result);
})

router.get('/', async(req, res) => {
  const result = await peopleController.getAll();
  res.json(result);
})

router.get('/:id', async(req, res) => {
  const id = req.params.id;
  const result = await peopleController.getOne(id);
  res.json(result);
})

export { router };