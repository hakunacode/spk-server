/* tslint:disable */

declare var Object: any;
export interface AuthInterface {
  "id"?: number;
}

export class Auth implements AuthInterface {
  "id": number;
  constructor(data?: AuthInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Auth`.
   */
  public static getModelName() {
    return "Auth";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Auth for dynamic purposes.
  **/
  public static factory(data: AuthInterface): Auth{
    return new Auth(data);
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
      name: 'Auth',
      plural: 'Auths',
      properties: {
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
