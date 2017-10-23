/* tslint:disable */
import { Injectable } from '@angular/core';
import { Auth } from '../../models/Auth';
import { Rolemapping } from '../../models/Rolemapping';
import { Container } from '../../models/Container';
import { TmPegawai } from '../../models/TmPegawai';
import { TbUser } from '../../models/TbUser';
import { TbCalendar } from '../../models/TbCalendar';
import { TbChatroom } from '../../models/TbChatroom';
import { TbChatuserto } from '../../models/TbChatuserto';
import { TbChatuser } from '../../models/TbChatuser';
import { TbChatroomlist } from '../../models/TbChatroomlist';
import { TbChatroomdetail } from '../../models/TbChatroomdetail';
import { TbDetailKomptensiDosen } from '../../models/TbDetailKomptensiDosen';
import { TmFungsionalDosen } from '../../models/TmFungsionalDosen';
import { TmKuota } from '../../models/TmKuota';
import { TmKompetensiDosen } from '../../models/TmKompetensiDosen';
import { TmPendidikanDosen } from '../../models/TmPendidikanDosen';
import { TbKriteria } from '../../models/TbKriteria';
import { TbHistoriKlasifikasi } from '../../models/TbHistoriKlasifikasi';
import { TmDosen } from '../../models/TmDosen';
import { TmMahasiswa } from '../../models/TmMahasiswa';
import { Tmviewhistorykriteria } from '../../models/Tmviewhistorykriteria';
import { Chatroom } from '../../models/Chatroom';
import { Chatisi } from '../../models/Chatisi';
import { Tviewgroupdata } from '../../models/Tviewgroupdata';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Auth: Auth,
    Rolemapping: Rolemapping,
    Container: Container,
    TmPegawai: TmPegawai,
    TbUser: TbUser,
    TbCalendar: TbCalendar,
    TbChatroom: TbChatroom,
    TbChatuserto: TbChatuserto,
    TbChatuser: TbChatuser,
    TbChatroomlist: TbChatroomlist,
    TbChatroomdetail: TbChatroomdetail,
    TbDetailKomptensiDosen: TbDetailKomptensiDosen,
    TmFungsionalDosen: TmFungsionalDosen,
    TmKuota: TmKuota,
    TmKompetensiDosen: TmKompetensiDosen,
    TmPendidikanDosen: TmPendidikanDosen,
    TbKriteria: TbKriteria,
    TbHistoriKlasifikasi: TbHistoriKlasifikasi,
    TmDosen: TmDosen,
    TmMahasiswa: TmMahasiswa,
    Tmviewhistorykriteria: Tmviewhistorykriteria,
    Chatroom: Chatroom,
    Chatisi: Chatisi,
    Tviewgroupdata: Tviewgroupdata,
    
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
