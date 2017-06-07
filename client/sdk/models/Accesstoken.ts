/* tslint:disable */

declare var Object: any;
export interface AccesstokenInterface {
  "id": string;
  "ttl"?: number;
  "created"?: Date;
  "userid"?: number;
}

export class Accesstoken implements AccesstokenInterface {
  "id": string;
  "ttl": number;
  "created": Date;
  "userid": number;
  constructor(data?: AccesstokenInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Accesstoken`.
   */
  public static getModelName() {
    return "Accesstoken";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Accesstoken for dynamic purposes.
  **/
  public static factory(data: AccesstokenInterface): Accesstoken{
    return new Accesstoken(data);
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
      name: 'Accesstoken',
      plural: 'Accesstokens',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "ttl": {
          name: 'ttl',
          type: 'number'
        },
        "created": {
          name: 'created',
          type: 'Date'
        },
        "userid": {
          name: 'userid',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
