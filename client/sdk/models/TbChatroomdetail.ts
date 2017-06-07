/* tslint:disable */

declare var Object: any;
export interface TbChatroomdetailInterface {
  "textchat"?: string;
  "created"?: Date;
  "id"?: number;
  "chatroomid": number;
}

export class TbChatroomdetail implements TbChatroomdetailInterface {
  "textchat": string;
  "created": Date;
  "id": number;
  "chatroomid": number;
  constructor(data?: TbChatroomdetailInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TbChatroomdetail`.
   */
  public static getModelName() {
    return "TbChatroomdetail";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TbChatroomdetail for dynamic purposes.
  **/
  public static factory(data: TbChatroomdetailInterface): TbChatroomdetail{
    return new TbChatroomdetail(data);
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
      name: 'TbChatroomdetail',
      plural: 'TbChatroomdetails',
      properties: {
        "textchat": {
          name: 'textchat',
          type: 'string'
        },
        "created": {
          name: 'created',
          type: 'Date'
        },
        "id": {
          name: 'id',
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
