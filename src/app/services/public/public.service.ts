import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { Actividades } from '../../shared/model/actividades.model';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor(private apiService: ApiService) { }

  public getActividades(): Observable<Actividades[]> {
    return this.apiService.get('http://api.jsonbin.io/b/5bc52599716f9364f8c4a31a/1')
      .map(response => {
          return response;
      });
  }
}
