/* tslint:disable */

declare var Object: any;
export interface TmDosenInterface {
  "id"?: number;
  "alamat"?: string;
  "createddate"?: Date;
  "fungsional"?: string;
  "jeniskelamin"?: string;
  "kompetensi"?: string;
  "kuota"?: string;
  "nama"?: string;
  "nidn"?: string;
  "pendidikan"?: string;
  "telephone"?: string;
  "ttl"?: string;
}

export class TmDosen implements TmDosenInterface {
  "id": number;
  "alamat": string;
  "createddate": Date;
  "fungsional": string;
  "jeniskelamin": string;
  "kompetensi": string;
  "kuota": string;
  "nama": string;
  "nidn": string;
  "pendidikan": string;
  "telephone": string;
  "ttl": string;
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
        "id": {
          name: 'id',
          type: 'number'
        },
        "alamat": {
          name: 'alamat',
          type: 'string'
        },
        "createddate": {
          name: 'createddate',
          type: 'Date'
        },
        "fungsional": {
          name: 'fungsional',
          type: 'string'
        },
        "jeniskelamin": {
          name: 'jeniskelamin',
          type: 'string'
        },
        "kompetensi": {
          name: 'kompetensi',
          type: 'string'
        },
        "kuota": {
          name: 'kuota',
          type: 'string'
        },
        "nama": {
          name: 'nama',
          type: 'string'
        },
        "nidn": {
          name: 'nidn',
          type: 'string'
        },
        "pendidikan": {
          name: 'pendidikan',
          type: 'string'
        },
        "telephone": {
          name: 'telephone',
          type: 'string'
        },
        "ttl": {
          name: 'ttl',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
