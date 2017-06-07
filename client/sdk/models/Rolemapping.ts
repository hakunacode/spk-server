/* tslint:disable */

declare var Object: any;
export interface RolemappingInterface {
  "principaltype"?: string;
  "principalid"?: string;
  "roleid"?: number;
  "id"?: number;
}

export class Rolemapping implements RolemappingInterface {
  "principaltype": string;
  "principalid": string;
  "roleid": number;
  "id": number;
  constructor(data?: RolemappingInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Rolemapping`.
   */
  public static getModelName() {
    return "Rolemapping";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Rolemapping for dynamic purposes.
  **/
  public static factory(data: RolemappingInterface): Rolemapping{
    return new Rolemapping(data);
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
      name: 'Rolemapping',
      plural: 'Rolemappings',
      properties: {
        "principaltype": {
          name: 'principaltype',
          type: 'string'
        },
        "principalid": {
          name: 'principalid',
          type: 'string'
        },
        "roleid": {
          name: 'roleid',
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
