import { IStarWar } from "../entities/startWar";

export default class {
  mapArray(documents: any[]): IStarWar[] {
    const result: IStarWar[] = [];
    documents.forEach(document => {
      result.push(this.mapItem(document));
    });
    return result;
  }

  mapItem(document: any): IStarWar {
    const result: IStarWar = {
      nombre: document.name,
      altura: document.height,
      peso: document.mass,
      color_cabello: document.hair_color,
      color_piel: document.skin_color,
      color_ojos: document.eye_color,
      anio_nacimiento: document.birth_year,
      genero: document.gender,
      mundo_natal: document.homeworld,
      peliculas: document.films,
      especies: document.species,
      vehiculos: document.vehicles,
    }
    return result;
  }
}