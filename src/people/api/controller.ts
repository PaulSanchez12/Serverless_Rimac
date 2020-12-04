import { PeopleService } from '../service/service';
import { IPeople } from '../entities/people';

const peopleService = new PeopleService();

export class PeopleController {
  constructor() {}

  async insert(people: IPeople) {
    return await peopleService.insert(people);
  }

  async getAll() {
    return await peopleService.getAll();
  }

  async getOne(id: string) {
    return await peopleService.getOne(id);
  }
}