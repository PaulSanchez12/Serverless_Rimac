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
      id: document.id === undefined ? '' : document.id.S,
      nombre: document.nombre === undefined ? '' : document.nombre.S,
      altura: document.altura === undefined ? '' : document.altura.S,
      peso: document.peso === undefined ? '' : document.peso.S,
      color_cabello: document.color_cabello === undefined ? '' : document.color_cabello.S,
      color_piel: document.color_piel === undefined ? '' : document.color_piel.S,
      color_ojos: document.color_ojos === undefined ? '' : document.color_ojos.S,
      anio_nacimiento: document.anio_nacimiento === undefined ? '' : document.anio_nacimiento.S,
      genero: document.genero === undefined ? '' : document.genero.S,
    }
    return result;
  }
}