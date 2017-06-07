/* tslint:disable */
import { Injectable } from '@angular/core';
import { Auth } from '../../models/Auth';
import { Accesstoken } from '../../models/Accesstoken';
import { Rolemapping } from '../../models/Rolemapping';
import { Container } from '../../models/Container';
import { TmMahasiswa } from '../../models/TmMahasiswa';
import { TmPegawai } from '../../models/TmPegawai';
import { TmDosen } from '../../models/TmDosen';
import { TbUser } from '../../models/TbUser';
import { TbCalendar } from '../../models/TbCalendar';
import { TbChatroom } from '../../models/TbChatroom';
import { TbChatuserto } from '../../models/TbChatuserto';
import { TbChatuser } from '../../models/TbChatuser';
import { TbChatroomlist } from '../../models/TbChatroomlist';
import { TbChatroomdetail } from '../../models/TbChatroomdetail';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Auth: Auth,
    Accesstoken: Accesstoken,
    Rolemapping: Rolemapping,
    Container: Container,
    TmMahasiswa: TmMahasiswa,
    TmPegawai: TmPegawai,
    TmDosen: TmDosen,
    TbUser: TbUser,
    TbCalendar: TbCalendar,
    TbChatroom: TbChatroom,
    TbChatuserto: TbChatuserto,
    TbChatuser: TbChatuser,
    TbChatroomlist: TbChatroomlist,
    TbChatroomdetail: TbChatroomdetail,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
