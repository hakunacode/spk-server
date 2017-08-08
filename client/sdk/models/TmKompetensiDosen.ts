/* tslint:disable */

declare var Object: any;
export interface TmKompetensiDosenInterface {
  "id"?: number;
  "bobot": number;
  "kompetensi": string;
}

export class TmKompetensiDosen implements TmKompetensiDosenInterface {
  "id": number;
  "bobot": number;
  "kompetensi": string;
  constructor(data?: TmKompetensiDosenInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TmKompetensiDosen`.
   */
  public static getModelName() {
    return "TmKompetensiDosen";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TmKompetensiDosen for dynamic purposes.
  **/
  public static factory(data: TmKompetensiDosenInterface): TmKompetensiDosen{
    return new TmKompetensiDosen(data);
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
      name: 'TmKompetensiDosen',
      plural: 'TmKompetensiDosens',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "bobot": {
          name: 'bobot',
          type: 'number'
        },
        "kompetensi": {
          name: 'kompetensi',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
