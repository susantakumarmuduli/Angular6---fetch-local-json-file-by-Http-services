import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  constructor(private http: HttpClient) { }
  getData(): Observable<IEmployee[]>  {
    return this.http.get<IEmployee[]>('/assets/data.json');
  }
}
