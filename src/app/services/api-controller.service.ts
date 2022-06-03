import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { waitForAsync } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class ApiControllerService {

  constructor(private http: HttpClient) { }

  getCommunes() : Observable<Object>{
    //let commune = this.http.get<JSON>("https://geo.api.gouv.fr/communes?codePostal=42153");
    return this.http.request('GET', "https://geo.api.gouv.fr/communes?codePostal=75000", {responseType:'json'});
    
    
  }
}
