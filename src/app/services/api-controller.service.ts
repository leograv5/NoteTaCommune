import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiControllerService {

  constructor(private http: HttpClient) { }

  getCommunes() : JSON{
    let commune = this.http.get<JSON>("https://geo.api.gouv.fr/communes?codePostal=42153");
    let truc;
    commune.forEach(element => {
      truc = element;
    });
    
    return truc;
  }
}
