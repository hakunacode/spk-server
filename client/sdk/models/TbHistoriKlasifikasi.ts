/* tslint:disable */

declare var Object: any;
export interface TbHistoriKlasifikasiInterface {
  "idMahasiswa": number;
  "idDosen": number;
  "bobot": number;
  "hasil": number;
  "id"?: number;
}

export class TbHistoriKlasifikasi implements TbHistoriKlasifikasiInterface {
  "idMahasiswa": number;
  "idDosen": number;
  "bobot": number;
  "hasil": number;
  "id": number;
  constructor(data?: TbHistoriKlasifikasiInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TbHistoriKlasifikasi`.
   */
  public static getModelName() {
    return "TbHistoriKlasifikasi";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TbHistoriKlasifikasi for dynamic purposes.
  **/
  public static factory(data: TbHistoriKlasifikasiInterface): TbHistoriKlasifikasi{
    return new TbHistoriKlasifikasi(data);
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
      name: 'TbHistoriKlasifikasi',
      plural: 'TbHistoriKlasifikasis',
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
