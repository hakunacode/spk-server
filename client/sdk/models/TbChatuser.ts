/* tslint:disable */

declare var Object: any;
export interface TbChatuserInterface {
  "created"?: string;
  "id"?: number;
  "userid": number;
}

export class TbChatuser implements TbChatuserInterface {
  "created": string;
  "id": number;
  "userid": number;
  constructor(data?: TbChatuserInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TbChatuser`.
   */
  public static getModelName() {
    return "TbChatuser";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TbChatuser for dynamic purposes.
  **/
  public static factory(data: TbChatuserInterface): TbChatuser{
    return new TbChatuser(data);
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
      name: 'TbChatuser',
      plural: 'TbChatusers',
      properties: {
        "created": {
          name: 'created',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
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
