import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Commune } from 'src/app/interfaces/commune';
import { Region } from 'src/app/interfaces/region';
import { Departement } from 'src/app/interfaces/departement';

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
        codeRegion : "11",
        codeDepartement : "75",
        population : 1
      },
      {
        nom : "Toulouse-sur-Rhône",
        code : "87455",
        codeRegion : "11",
        codeDepartement : "75",
        population : 456444
      },
      {
        nom : "Bordeaux-sur-Rhin",
        code : "75000",
        codeRegion : "11",
        codeDepartement : "75",
        population : 100000000000000000000
      },
      {
        nom : "Vichy-sur-Dordogne",
        code : "75000",
        codeRegion : "11",
        codeDepartement : "75",
        population : 344
      },
      {
        nom : "Rioges-sur-Moncut",
        code : "75000",
        codeRegion : "11",
        codeDepartement : "75",
        population : 8989444
      }
    ];
    
    return topCommunes; 
  }

  getRegionFromCode(code: String): Observable<Region> {
    return this.http.get<Region>("https://geo.api.gouv.fr/regions/"+code);
  }

  getDepartementFromCode(code: String): Observable<Departement> {
    return this.http.get<Departement>("https://geo.api.gouv.fr/departements/"+code);
  }

  getCommunesByName(name: String): Observable<Commune[]> {
    return this.http.get<Commune[]>("https://geo.api.gouv.fr/communes?limit=20&nom="+name);
  }

  /*
  getCommunePhoto(communeName :string) :String {
    this.http.get("https://en.wikipedia.org/w/api.php", {
      headers: new HttpHeaders().append('Access-Control-Allow-Origin', '*'),
      params: new HttpParams().set('action', 'query')
      .set('format', 'json')
      .set('generator', 'search')
      .set('gsrsearch', communeName)
      .set("gsrnamespace", 0)
      .set('gsrlimit', 1)
      .set('prop', 'pageimages')
      .set('piprop', 'thumbnail')
      .set('pilimit', 'max')
      .set('pithumbsize', 400)}).subscribe(data => {
        console.log(data);
      });

    return "marche stp";
  }*/
}
