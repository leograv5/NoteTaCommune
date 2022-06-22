import { Component, Input, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Commune } from 'src/app/interfaces/commune';
import { ApiControllerService } from 'src/app/services/api-controller.service';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss'],
})
export class GeolocationComponent implements OnInit {

  constructor(private apiService: ApiControllerService) { }
  
  commune: Commune;
  url_block : String;
  url_img : String;

  ngOnInit() {
  }

  geolocateMe(){
    let longitude: number;
    let latitude: number;
    Geolocation.getCurrentPosition().then(position => {
      longitude = position.coords.longitude;
      latitude = position.coords.latitude;


      let observableCommune = this.apiService.getCommuneFromCo(longitude, latitude);
      observableCommune.subscribe(data => {
        this.commune = data[0];
        this.url_block = "https://www.prevision-meteo.ch/meteo/localite/";
        this.url_img = "https://www.prevision-meteo.ch/uploads/widget/" + this.commune.nom + "_0.png";
        console.log(this.commune);

        this.apiService.getRegionFromCode(this.commune.codeRegion).subscribe(region => this.commune.codeRegion = region.nom);
        this.apiService.getDepartementFromCode(this.commune.codeDepartement).subscribe(departement => this.commune.codeDepartement = departement.nom);
      });
    });
  }


}
