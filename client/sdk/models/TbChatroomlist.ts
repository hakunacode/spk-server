/* tslint:disable */

declare var Object: any;
export interface TbChatroomlistInterface {
  "created"?: Date;
  "id"?: number;
  "userid": number;
  "useridto": number;
  "chatroomid": number;
}

export class TbChatroomlist implements TbChatroomlistInterface {
  "created": Date;
  "id": number;
  "userid": number;
  "useridto": number;
  "chatroomid": number;
  constructor(data?: TbChatroomlistInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TbChatroomlist`.
   */
  public static getModelName() {
    return "TbChatroomlist";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TbChatroomlist for dynamic purposes.
  **/
  public static factory(data: TbChatroomlistInterface): TbChatroomlist{
    return new TbChatroomlist(data);
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
      name: 'TbChatroomlist',
      plural: 'TbChatroomlists',
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
        "chatroomid": {
          name: 'chatroomid',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
