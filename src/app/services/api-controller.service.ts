import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Communes, Commune } from 'src/app/interfaces/commune';

@Injectable({
  providedIn: 'root'
})
export class ApiControllerService {

  constructor(private http: HttpClient) { }

  getCommunes() : Observable<Communes>{
    return this.http.get<Communes>("https://geo.api.gouv.fr/communes?codePostal=42300", {responseType:'json'});
  }
}
