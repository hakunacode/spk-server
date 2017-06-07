/* tslint:disable */

declare var Object: any;
export interface TmMahasiswaInterface {
  "nim": string;
  "userid": number;
  "nama": string;
  "email"?: string;
  "pictures"?: string;
  "jenisKelamin"?: string;
  "alamat"?: string;
  "ttl"?: string;
  "jenjang"?: string;
  "tanggalMasuk"?: Date;
  "jurusan"?: string;
  "createddate"?: Date;
  "id"?: number;
  "telephone"?: string;
}

export class TmMahasiswa implements TmMahasiswaInterface {
  "nim": string;
  "userid": number;
  "nama": string;
  "email": string;
  "pictures": string;
  "jenisKelamin": string;
  "alamat": string;
  "ttl": string;
  "jenjang": string;
  "tanggalMasuk": Date;
  "jurusan": string;
  "createddate": Date;
  "id": number;
  "telephone": string;
  constructor(data?: TmMahasiswaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TmMahasiswa`.
   */
  public static getModelName() {
    return "TmMahasiswa";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TmMahasiswa for dynamic purposes.
  **/
  public static factory(data: TmMahasiswaInterface): TmMahasiswa{
    return new TmMahasiswa(data);
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
      name: 'TmMahasiswa',
      plural: 'TmMahasiswas',
      properties: {
        "nim": {
          name: 'nim',
          type: 'string'
        },
        "userid": {
          name: 'userid',
          type: 'number'
        },
        "nama": {
          name: 'nama',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "pictures": {
          name: 'pictures',
          type: 'string'
        },
        "jenisKelamin": {
          name: 'jenisKelamin',
          type: 'string'
        },
        "alamat": {
          name: 'alamat',
          type: 'string'
        },
        "ttl": {
          name: 'ttl',
          type: 'string'
        },
        "jenjang": {
          name: 'jenjang',
          type: 'string'
        },
        "tanggalMasuk": {
          name: 'tanggalMasuk',
          type: 'Date'
        },
        "jurusan": {
          name: 'jurusan',
          type: 'string'
        },
        "createddate": {
          name: 'createddate',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "telephone": {
          name: 'telephone',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
