/* tslint:disable */

declare var Object: any;
export interface TmPegawaiInterface {
  "createddate"?: Date;
  "id"?: number;
  "alamat"?: string;
  "telephone"?: string;
  "jeniskelamin"?: string;
  "nip": string;
  "nama": string;
}

export class TmPegawai implements TmPegawaiInterface {
  "createddate": Date;
  "id": number;
  "alamat": string;
  "telephone": string;
  "jeniskelamin": string;
  "nip": string;
  "nama": string;
  constructor(data?: TmPegawaiInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TmPegawai`.
   */
  public static getModelName() {
    return "TmPegawai";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TmPegawai for dynamic purposes.
  **/
  public static factory(data: TmPegawaiInterface): TmPegawai{
    return new TmPegawai(data);
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
      name: 'TmPegawai',
      plural: 'TmPegawais',
      properties: {
        "createddate": {
          name: 'createddate',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "alamat": {
          name: 'alamat',
          type: 'string'
        },
        "telephone": {
          name: 'telephone',
          type: 'string'
        },
        "jeniskelamin": {
          name: 'jeniskelamin',
          type: 'string'
        },
        "nip": {
          name: 'nip',
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
