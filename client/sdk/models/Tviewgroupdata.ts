/* tslint:disable */

declare var Object: any;
export interface TviewgroupdataInterface {
  "namadsn"?: string;
  "jmlhasil"?: string;
  "periode"?: number;
  "nidn"?: string;
}

export class Tviewgroupdata implements TviewgroupdataInterface {
  "namadsn": string;
  "jmlhasil": string;
  "periode": number;
  "nidn": string;
  constructor(data?: TviewgroupdataInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Tviewgroupdata`.
   */
  public static getModelName() {
    return "Tviewgroupdata";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Tviewgroupdata for dynamic purposes.
  **/
  public static factory(data: TviewgroupdataInterface): Tviewgroupdata{
    return new Tviewgroupdata(data);
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
      name: 'Tviewgroupdata',
      plural: 'Tviewgroupdata',
      properties: {
        "namadsn": {
          name: 'namadsn',
          type: 'string'
        },
        "jmlhasil": {
          name: 'jmlhasil',
          type: 'string'
        },
        "periode": {
          name: 'periode',
          type: 'number'
        },
        "nidn": {
          name: 'nidn',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
