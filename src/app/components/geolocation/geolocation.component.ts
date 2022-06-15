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
      });
    });
    

  }


}
