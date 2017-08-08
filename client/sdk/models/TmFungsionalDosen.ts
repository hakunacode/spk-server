/* tslint:disable */

declare var Object: any;
export interface TmFungsionalDosenInterface {
  "fungsional"?: string;
  "bobot"?: number;
  "id"?: number;
}

export class TmFungsionalDosen implements TmFungsionalDosenInterface {
  "fungsional": string;
  "bobot": number;
  "id": number;
  constructor(data?: TmFungsionalDosenInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TmFungsionalDosen`.
   */
  public static getModelName() {
    return "TmFungsionalDosen";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TmFungsionalDosen for dynamic purposes.
  **/
  public static factory(data: TmFungsionalDosenInterface): TmFungsionalDosen{
    return new TmFungsionalDosen(data);
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
      name: 'TmFungsionalDosen',
      plural: 'TmFungsionalDosens',
      properties: {
        "fungsional": {
          name: 'fungsional',
          type: 'string'
        },
        "bobot": {
          name: 'bobot',
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
