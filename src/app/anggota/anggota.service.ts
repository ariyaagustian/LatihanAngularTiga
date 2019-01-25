import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AnggotaModel} from './anggota.model';
import {environment} from '../../environments/environment';

@Injectable()
export class AnggotaService {

  constructor(private http: HttpClient) { }

  getListAnggota(): Observable<AnggotaModel[]> {
    return this.http.get<AnggotaModel[]>(environment.basePath + '/api/anggota/list');
  }

  getAnggota(id: string): Observable<AnggotaModel> {
    return this.http.get<AnggotaModel>(environment.basePath + '/api/anggota/' + id);
  }

  tambahAnggota(anggota: AnggotaModel): Observable<AnggotaModel> {
    return this.http.post<AnggotaModel>(environment.basePath + '/api/anggota/save', anggota);
  }
}
