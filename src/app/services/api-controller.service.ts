import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concat, Observable } from 'rxjs';

import { Commune } from 'src/app/interfaces/commune';

@Injectable({
  providedIn: 'root'
})
export class ApiControllerService {

  constructor(private http: HttpClient) { }

  getCommunes() : Observable<Commune[]>{
    return this.http.get<Commune[]>("https://geo.api.gouv.fr/communes?codePostal=42300");
  }

  getCommuneFromCo(longitude: number, latitude: number): Observable<Commune> {
    return this.http.get<Commune>("https://geo.api.gouv.fr/communes?lat="+ latitude +"&lon=" + longitude);
  }

  // Appel à notre API qui renvoie le top 5 des villes
  getTopCommunes() : Commune[]{
    let topCommunes: Commune[] = [
      {
        nom : "Paris-sur-Seine",
        code : "19100",
        population : 1
      },
      {
        nom : "Toulouse-sur-Rhône",
        code : "87455",
        population : 456444
      },
      {
        nom : "Bordeaux-sur-Rhin",
        code : "75000",
        population : 100000000000000000000
      },
      {
        nom : "Vichy-sur-Dordogne",
        code : "75000",
        population : 344
      },
      {
        nom : "Rioges-sur-Moncut",
        code : "75000",
        population : 8989444
      }
    ];
    
    return topCommunes; 
  }
}
