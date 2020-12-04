import Axios from 'axios';
import { env } from 'process';
import Mapper from '../mapper/mapper';

const mapper = new Mapper();

export class StarWarService {
  constructor() {}

  async getAll() {
    try {
      const response = await Axios.get(`${env.API_STAR_WAR}/people/`);
      return mapper.mapArray(response.data.results);
    } catch (error) {
      return {
        statusCode: error.statusCode || 501,
        message: error.message
      }
    }
  }

  async getOne(id: string) {
    try {
      const response = await Axios.get(`${env.API_STAR_WAR}/people/${id}`);
      return mapper.mapItem(response.data);
    } catch (error) {
      return {
        statusCode: error.statusCode || 501,
        message: error.message
      }
    }
  }
}