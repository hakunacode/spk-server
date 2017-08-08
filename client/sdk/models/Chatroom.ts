/* tslint:disable */

declare var Object: any;
export interface ChatroomInterface {
  "headerChat": string;
  "createdFirst": string;
  "createdSecond": string;
  "fromname": string;
  "toname": string;
  "id"?: number;
}

export class Chatroom implements ChatroomInterface {
  "headerChat": string;
  "createdFirst": string;
  "createdSecond": string;
  "fromname": string;
  "toname": string;
  "id": number;
  constructor(data?: ChatroomInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Chatroom`.
   */
  public static getModelName() {
    return "Chatroom";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Chatroom for dynamic purposes.
  **/
  public static factory(data: ChatroomInterface): Chatroom{
    return new Chatroom(data);
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
      name: 'Chatroom',
      plural: 'Chatrooms',
      properties: {
        "headerChat": {
          name: 'headerChat',
          type: 'string'
        },
        "createdFirst": {
          name: 'createdFirst',
          type: 'string'
        },
        "createdSecond": {
          name: 'createdSecond',
          type: 'string'
        },
        "fromname": {
          name: 'fromname',
          type: 'string'
        },
        "toname": {
          name: 'toname',
          type: 'string'
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
