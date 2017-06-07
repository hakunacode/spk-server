/* tslint:disable */

declare var Object: any;
export interface TbChatroomInterface {
  "created"?: Date;
  "id"?: number;
  "room"?: string;
}

export class TbChatroom implements TbChatroomInterface {
  "created": Date;
  "id": number;
  "room": string;
  constructor(data?: TbChatroomInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TbChatroom`.
   */
  public static getModelName() {
    return "TbChatroom";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TbChatroom for dynamic purposes.
  **/
  public static factory(data: TbChatroomInterface): TbChatroom{
    return new TbChatroom(data);
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
      name: 'TbChatroom',
      plural: 'TbChatrooms',
      properties: {
        "created": {
          name: 'created',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "room": {
          name: 'room',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
