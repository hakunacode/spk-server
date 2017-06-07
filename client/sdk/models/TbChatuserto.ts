/* tslint:disable */

declare var Object: any;
export interface TbChatusertoInterface {
  "created"?: Date;
  "id"?: number;
  "userid": number;
  "useridto": number;
}

export class TbChatuserto implements TbChatusertoInterface {
  "created": Date;
  "id": number;
  "userid": number;
  "useridto": number;
  constructor(data?: TbChatusertoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TbChatuserto`.
   */
  public static getModelName() {
    return "TbChatuserto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TbChatuserto for dynamic purposes.
  **/
  public static factory(data: TbChatusertoInterface): TbChatuserto{
    return new TbChatuserto(data);
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
      name: 'TbChatuserto',
      plural: 'TbChatusertos',
      properties: {
        "created": {
          name: 'created',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "userid": {
          name: 'userid',
          type: 'number'
        },
        "useridto": {
          name: 'useridto',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
