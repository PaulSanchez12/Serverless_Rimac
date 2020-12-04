import { IPeople } from '../entities/people';
import { PeopleRepository } from '../repository/repository';

const peopleRepository = new PeopleRepository();

export class PeopleService {
  constructor() {}

  async insert(people: IPeople) {
    return await peopleRepository.insert(people);
  }

  async getAll() {
    return await peopleRepository.getAll();
  }

  async getOne(id: string) {
    return await peopleRepository.getOne(id);
  }
}