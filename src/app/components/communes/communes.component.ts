import { Component, OnInit } from '@angular/core';
import { ApiControllerService } from 'src/app/services/api-controller.service';

import { Commune } from 'src/app/interfaces/commune';

@Component({
  selector: 'app-communes',
  templateUrl: './communes.component.html',
  styleUrls: ['./communes.component.scss'],
})
export class CommunesComponent implements OnInit {

  constructor(private apiService: ApiControllerService) { }

  communes: Commune[];

  ngOnInit() {
    let communeObservable = this.apiService.getTopCommunes();
    /*communeObservable.subscribe(data => {
      this.communes = [...data];
    });*/
    this.communes = communeObservable;
  }

}
