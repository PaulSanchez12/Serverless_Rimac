import { env } from 'process';
import { v4 as uuidv4 } from 'uuid';
import dynamodb from '../../database/dynamodb';
import { PutItemCommand, ScanCommand, GetItemCommand } from "@aws-sdk/client-dynamodb";
import { IPeople } from '../entities/people';
import Mapper from '../mapper/mapper';

const mapper = new Mapper();

export class PeopleRepository {
  constructor() {}

  async insert(people: IPeople) {
    try {
      const id = uuidv4();
      const command = new PutItemCommand({
        Item: {
          "id": {
            "S": id
          },
          "nombre": {
            "S": people.nombre
          },
          "altura": {
            "S": people.altura
          },
          "peso": {
            "S": people.peso
          },
          "color_cabello": {
            "S": people.color_cabello
          },
          "color_piel": {
            "S": people.color_piel
          },
          "color_ojos": {
            "S": people.color_ojos
          },
          "anio_nacimiento": {
            "S": people.anio_nacimiento
          },
          "genero": {
            "S": people.genero
          }
        },
        ReturnValues: "ALL_OLD",
        TableName: env.DYNAMODB_TABLE
      });

      await dynamodb.send(command);

      return {
        id
      };
    } catch (error) {
      return {
        statusCode: error.statusCode || 501,
        message: error.message
      }
    }
  }

  async getAll() {
    try {
      const command = new ScanCommand({
        TableName: env.DYNAMODB_TABLE,
      });
      const res = await dynamodb.send(command);
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
      const command = new GetItemCommand({
        TableName: env.DYNAMODB_TABLE,
        Key: {
          "id": {
            "S": id,
          },
        },
      });

      const res = await dynamodb.send(command);
      return mapper.mapItem(res.Item);
    } catch (error) {
      return {
        statusCode: error.statusCode || 501,
        message: error.message
      }
    }
  }
}