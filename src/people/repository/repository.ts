import { env } from 'process';
import { v4 as uuidv4 } from 'uuid';
import dynamodb from '../../database/dynamodb';
import { IPeople } from '../entities/people';
import Mapper from '../mapper/mapper';

const mapper = new Mapper();

export class PeopleRepository {
  constructor() {}

  async insert(people: IPeople) {
    try {
      const params = {
        TableName: env.DYNAMODB_TABLE,
        Item: {
          id: uuidv4(),
          nombre: people.nombre,
          altura: people.altura,
          peso: people.peso,
          color_cabello: people.color_cabello,
          color_piel: people.color_piel,
          color_ojos: people.color_ojos,
          anio_nacimiento: people.anio_nacimiento,
          genero: people.genero,
        }
      };

      await dynamodb.put(params).promise();
      return;
    } catch (error) {
      return {
        statusCode: error.statusCode || 501,
        message: error.message
      }
    }
  }

  async getAll() {
    try {
      const params = {
        TableName: env.DYNAMODB_TABLE,
      };
      const res = await dynamodb.scan(params).promise();
      return mapper.mapArray(res.Items);
    } catch (error) {
      return {
        statusCode: error.statusCode || 501,
        message: error.message
      }
    }
  }

  async getOne(id: string) {
    try {
      const params = {
        TableName: env.DYNAMODB_TABLE,
        Key: {
          id: id,
        },
      };
      const res = await dynamodb.get(params).promise();
      return mapper.mapItem(res.Item);
    } catch (error) {
      return {
        statusCode: error.statusCode || 501,
        message: error.message
      }
    }
  }
}