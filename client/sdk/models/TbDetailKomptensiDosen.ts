/* tslint:disable */

declare var Object: any;
export interface TbDetailKomptensiDosenInterface {
  "idDosen": number;
  "idKompetensi": number;
  "bobot": number;
  "id"?: number;
}

export class TbDetailKomptensiDosen implements TbDetailKomptensiDosenInterface {
  "idDosen": number;
  "idKompetensi": number;
  "bobot": number;
  "id": number;
  constructor(data?: TbDetailKomptensiDosenInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TbDetailKomptensiDosen`.
   */
  public static getModelName() {
    return "TbDetailKomptensiDosen";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TbDetailKomptensiDosen for dynamic purposes.
  **/
  public static factory(data: TbDetailKomptensiDosenInterface): TbDetailKomptensiDosen{
    return new TbDetailKomptensiDosen(data);
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
      name: 'TbDetailKomptensiDosen',
      plural: 'TbDetailKomptensiDosens',
      properties: {
        "idDosen": {
          name: 'idDosen',
          type: 'number'
        },
        "idKompetensi": {
          name: 'idKompetensi',
          type: 'number'
        },
        "bobot": {
          name: 'bobot',
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
