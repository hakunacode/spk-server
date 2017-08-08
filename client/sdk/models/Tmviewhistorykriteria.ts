/* tslint:disable */

declare var Object: any;
export interface TmviewhistorykriteriaInterface {
  "idMahasiswa": number;
  "idDosen": number;
  "bobot": number;
  "hasil": number;
  "nidn"?: string;
  "namadsn"?: string;
  "idPendidikan"?: number;
  "idFungsional"?: number;
  "idKompetensi"?: number;
  "idKuota"?: number;
  "telephone"?: string;
  "nim": string;
  "periode": number;
  "namamhs": string;
  "kategori1": number;
  "kategori2": number;
  "kategori3": number;
  "judulskripsi": string;
  "id": number;
}

export class Tmviewhistorykriteria implements TmviewhistorykriteriaInterface {
  "idMahasiswa": number;
  "idDosen": number;
  "bobot": number;
  "hasil": number;
  "nidn": string;
  "namadsn": string;
  "idPendidikan": number;
  "idFungsional": number;
  "idKompetensi": number;
  "idKuota": number;
  "telephone": string;
  "nim": string;
  "periode": number;
  "namamhs": string;
  "kategori1": number;
  "kategori2": number;
  "kategori3": number;
  "judulskripsi": string;
  "id": number;
  constructor(data?: TmviewhistorykriteriaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Tmviewhistorykriteria`.
   */
  public static getModelName() {
    return "Tmviewhistorykriteria";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Tmviewhistorykriteria for dynamic purposes.
  **/
  public static factory(data: TmviewhistorykriteriaInterface): Tmviewhistorykriteria{
    return new Tmviewhistorykriteria(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Tmviewhistorykriteria',
      plural: 'Tmviewhistorykriteria',
      properties: {
        "idMahasiswa": {
          name: 'idMahasiswa',
          type: 'number'
        },
        "idDosen": {
          name: 'idDosen',
          type: 'number'
        },
        "bobot": {
          name: 'bobot',
          type: 'number'
        },
        "hasil": {
          name: 'hasil',
          type: 'number'
        },
        "nidn": {
          name: 'nidn',
          type: 'string'
        },
        "namadsn": {
          name: 'namadsn',
          type: 'string'
        },
        "idPendidikan": {
          name: 'idPendidikan',
          type: 'number'
        },
        "idFungsional": {
          name: 'idFungsional',
          type: 'number'
        },
        "idKompetensi": {
          name: 'idKompetensi',
          type: 'number'
        },
        "idKuota": {
          name: 'idKuota',
          type: 'number'
        },
        "telephone": {
          name: 'telephone',
          type: 'string'
        },
        "nim": {
          name: 'nim',
          type: 'string'
        },
        "periode": {
          name: 'periode',
          type: 'number'
        },
        "namamhs": {
          name: 'namamhs',
          type: 'string'
        },
        "kategori1": {
          name: 'kategori1',
          type: 'number'
        },
        "kategori2": {
          name: 'kategori2',
          type: 'number'
        },
        "kategori3": {
          name: 'kategori3',
          type: 'number'
        },
        "judulskripsi": {
          name: 'judulskripsi',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
