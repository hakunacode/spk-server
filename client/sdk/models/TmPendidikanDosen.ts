/* tslint:disable */

declare var Object: any;
export interface TmPendidikanDosenInterface {
  "pendidikan"?: string;
  "bobot"?: number;
  "id"?: number;
}

export class TmPendidikanDosen implements TmPendidikanDosenInterface {
  "pendidikan": string;
  "bobot": number;
  "id": number;
  constructor(data?: TmPendidikanDosenInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TmPendidikanDosen`.
   */
  public static getModelName() {
    return "TmPendidikanDosen";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TmPendidikanDosen for dynamic purposes.
  **/
  public static factory(data: TmPendidikanDosenInterface): TmPendidikanDosen{
    return new TmPendidikanDosen(data);
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
      name: 'TmPendidikanDosen',
      plural: 'TmPendidikanDosens',
      properties: {
        "pendidikan": {
          name: 'pendidikan',
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
