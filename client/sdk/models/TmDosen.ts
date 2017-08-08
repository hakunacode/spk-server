/* tslint:disable */

declare var Object: any;
export interface TmDosenInterface {
  "telephone"?: string;
  "ttl"?: string;
  "pictures"?: string;
  "created"?: Date;
  "jeniskelamin"?: string;
  "alamat"?: string;
  "id"?: number;
  "idFungsional": number;
  "userid"?: number;
  "idKompetensi": number;
  "idKuota": number;
  "idPendidikan": number;
  "nidn": string;
  "nama": string;
}

export class TmDosen implements TmDosenInterface {
  "telephone": string;
  "ttl": string;
  "pictures": string;
  "created": Date;
  "jeniskelamin": string;
  "alamat": string;
  "id": number;
  "idFungsional": number;
  "userid": number;
  "idKompetensi": number;
  "idKuota": number;
  "idPendidikan": number;
  "nidn": string;
  "nama": string;
  constructor(data?: TmDosenInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TmDosen`.
   */
  public static getModelName() {
    return "TmDosen";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TmDosen for dynamic purposes.
  **/
  public static factory(data: TmDosenInterface): TmDosen{
    return new TmDosen(data);
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
      name: 'TmDosen',
      plural: 'TmDosens',
      properties: {
        "telephone": {
          name: 'telephone',
          type: 'string'
        },
        "ttl": {
          name: 'ttl',
          type: 'string'
        },
        "pictures": {
          name: 'pictures',
          type: 'string'
        },
        "created": {
          name: 'created',
          type: 'Date'
        },
        "jeniskelamin": {
          name: 'jeniskelamin',
          type: 'string'
        },
        "alamat": {
          name: 'alamat',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "idFungsional": {
          name: 'idFungsional',
          type: 'number'
        },
        "userid": {
          name: 'userid',
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
        "idPendidikan": {
          name: 'idPendidikan',
          type: 'number'
        },
        "nidn": {
          name: 'nidn',
          type: 'string'
        },
        "nama": {
          name: 'nama',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
