/* tslint:disable */

declare var Object: any;
export interface TbKriteriaInterface {
  "kriteria": string;
  "keterangan": string;
  "bobot": number;
  "id"?: number;
}

export class TbKriteria implements TbKriteriaInterface {
  "kriteria": string;
  "keterangan": string;
  "bobot": number;
  "id": number;
  constructor(data?: TbKriteriaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TbKriteria`.
   */
  public static getModelName() {
    return "TbKriteria";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TbKriteria for dynamic purposes.
  **/
  public static factory(data: TbKriteriaInterface): TbKriteria{
    return new TbKriteria(data);
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
      name: 'TbKriteria',
      plural: 'TbKriteria',
      properties: {
        "kriteria": {
          name: 'kriteria',
          type: 'string'
        },
        "keterangan": {
          name: 'keterangan',
          type: 'string'
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
