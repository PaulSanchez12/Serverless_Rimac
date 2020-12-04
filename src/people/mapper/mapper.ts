import { IPeople } from "../entities/people";

export default class {
  mapArray(documents: any[]): IPeople[] {
    const result: IPeople[] = [];
    documents.forEach(document => {
      result.push(this.mapItem(document));
    });
    return result;
  }

  mapItem(document: any): IPeople {
    const result: IPeople = {
      id: document.id === undefined ? '' : document.id,
      nombre: document.nombre === undefined ? '' : document.nombre,
      altura: document.altura === undefined ? '' : document.altura,
      peso: document.peso === undefined ? '' : document.peso,
      color_cabello: document.color_cabello === undefined ? '' : document.color_cabello,
      color_piel: document.color_piel === undefined ? '' : document.color_piel,
      color_ojos: document.color_ojos === undefined ? '' : document.color_ojos,
      anio_nacimiento: document.anio_nacimiento === undefined ? '' : document.anio_nacimiento,
      genero: document.genero === undefined ? '' : document.genero,
    }
    return result;
  }
}