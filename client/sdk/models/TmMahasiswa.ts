/* tslint:disable */

declare var Object: any;
export interface TmMahasiswaInterface {
  "userid"?: number;
  "nim": string;
  "nama": string;
  "judulskripsi"?: string;
  "pictures"?: string;
  "kategori1": number;
  "kategori2": number;
  "kategori3": number;
  "periode": number;
  "id"?: number;
  "jeniskelamin"?: string;
  "tahunmasuk"?: string;
  "telphone"?: string;
  "ttl"?: string;
  "status"?: string;
  "kelas"?: string;
  "peminatan"?: string;
  "proses"?: string;
}

export class TmMahasiswa implements TmMahasiswaInterface {
  "userid": number;
  "nim": string;
  "nama": string;
  "judulskripsi": string;
  "pictures": string;
  "kategori1": number;
  "kategori2": number;
  "kategori3": number;
  "periode": number;
  "id": number;
  "jeniskelamin": string;
  "tahunmasuk": string;
  "telphone": string;
  "ttl": string;
  "status": string;
  "kelas": string;
  "peminatan": string;
  "proses": string;
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
        "userid": {
          name: 'userid',
          type: 'number'
        },
        "nim": {
          name: 'nim',
          type: 'string'
        },
        "nama": {
          name: 'nama',
          type: 'string'
        },
        "judulskripsi": {
          name: 'judulskripsi',
          type: 'string'
        },
        "pictures": {
          name: 'pictures',
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
        "periode": {
          name: 'periode',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "jeniskelamin": {
          name: 'jeniskelamin',
          type: 'string'
        },
        "tahunmasuk": {
          name: 'tahunmasuk',
          type: 'string'
        },
        "telphone": {
          name: 'telphone',
          type: 'string'
        },
        "ttl": {
          name: 'ttl',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
        "kelas": {
          name: 'kelas',
          type: 'string'
        },
        "peminatan": {
          name: 'peminatan',
          type: 'string'
        },
        "proses": {
          name: 'proses',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
