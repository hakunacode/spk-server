/* tslint:disable */

declare var Object: any;
export interface ChatisiInterface {
  "headerChat": string;
  "fromid": string;
  "toid": string;
  "chat": string;
  "fromname": string;
  "toname": string;
  "id"?: number;
}

export class Chatisi implements ChatisiInterface {
  "headerChat": string;
  "fromid": string;
  "toid": string;
  "chat": string;
  "fromname": string;
  "toname": string;
  "id": number;
  constructor(data?: ChatisiInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Chatisi`.
   */
  public static getModelName() {
    return "Chatisi";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Chatisi for dynamic purposes.
  **/
  public static factory(data: ChatisiInterface): Chatisi{
    return new Chatisi(data);
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
      name: 'Chatisi',
      plural: 'Chatisis',
      properties: {
        "headerChat": {
          name: 'headerChat',
          type: 'string'
        },
        "fromid": {
          name: 'fromid',
          type: 'string'
        },
        "toid": {
          name: 'toid',
          type: 'string'
        },
        "chat": {
          name: 'chat',
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
