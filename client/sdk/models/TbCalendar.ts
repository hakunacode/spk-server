/* tslint:disable */

declare var Object: any;
export interface TbCalendarInterface {
  "subject"?: string;
  "description"?: string;
  "startDate"?: Date;
  "endDate"?: Date;
  "allDay"?: any;
  "id"?: number;
  "userid": number;
}

export class TbCalendar implements TbCalendarInterface {
  "subject": string;
  "description": string;
  "startDate": Date;
  "endDate": Date;
  "allDay": any;
  "id": number;
  "userid": number;
  constructor(data?: TbCalendarInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TbCalendar`.
   */
  public static getModelName() {
    return "TbCalendar";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TbCalendar for dynamic purposes.
  **/
  public static factory(data: TbCalendarInterface): TbCalendar{
    return new TbCalendar(data);
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
      name: 'TbCalendar',
      plural: 'TbCalendars',
      properties: {
        "subject": {
          name: 'subject',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "startDate": {
          name: 'startDate',
          type: 'Date'
        },
        "endDate": {
          name: 'endDate',
          type: 'Date'
        },
        "allDay": {
          name: 'allDay',
          type: 'any'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "userid": {
          name: 'userid',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
