/* tslint:disable */

declare var Object: any;
export interface TmKuotaInterface {
  "kuotaMin"?: number;
  "kuotaMax"?: number;
  "kategori"?: string;
  "bobot"?: number;
  "id"?: number;
}

export class TmKuota implements TmKuotaInterface {
  "kuotaMin": number;
  "kuotaMax": number;
  "kategori": string;
  "bobot": number;
  "id": number;
  constructor(data?: TmKuotaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TmKuota`.
   */
  public static getModelName() {
    return "TmKuota";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TmKuota for dynamic purposes.
  **/
  public static factory(data: TmKuotaInterface): TmKuota{
    return new TmKuota(data);
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
      name: 'TmKuota',
      plural: 'TmKuota',
      properties: {
        "kuotaMin": {
          name: 'kuotaMin',
          type: 'number'
        },
        "kuotaMax": {
          name: 'kuotaMax',
          type: 'number'
        },
        "kategori": {
          name: 'kategori',
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
