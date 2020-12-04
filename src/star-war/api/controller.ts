import { StarWarService } from '../service/service';

const starWarService = new StarWarService();

export class StarWarController {
  constructor() {}

  async getAll() {
    return await starWarService.getAll();
  }

  async getOne(id: string) {
    return await starWarService.getOne(id);
  }
}