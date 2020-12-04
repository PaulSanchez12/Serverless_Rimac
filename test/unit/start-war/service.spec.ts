import { StarWarService } from '../../../src/star-war/service/service';

beforeAll(async () => {
  process.env.API_STAR_WAR = 'https://swapi.py4e.com/api';
})

describe('Module Start War Repository test', () => {
  test('Check defined class', () => {
    expect(StarWarService).toBeDefined();
  });

  test('Get All people of API successfull', async () => {
    const starWarService = new StarWarService();
    const result = await starWarService.getAll();

    expect(Array.isArray(result)).toBe(true);
    expect(Object.keys(result[0])).toEqual(
      expect.arrayContaining(['nombre','altura','peso',
                              'color_cabello','color_piel',
                              'color_ojos','anio_nacimiento',
                              'genero','mundo_natal','peliculas',
                              'especies','vehiculos'])
    );
  })

  test('Get one people of API successfull', async () => {
    const starWarService = new StarWarService();
    const result = await starWarService.getOne('1');

    expect(Array.isArray(result)).toBe(false);
    expect(Object.keys(result)).toEqual(
      expect.arrayContaining(['nombre','altura','peso',
                              'color_cabello','color_piel',
                              'color_ojos','anio_nacimiento',
                              'genero','mundo_natal','peliculas',
                              'especies','vehiculos'])
    );
  })
});