import { Component, OnInit } from '@angular/core';
import { ApiControllerService } from 'src/app/services/api-controller.service';

import { Communes, Commune } from 'src/app/interfaces/commune';

@Component({
  selector: 'app-commune',
  templateUrl: './commune.component.html',
  styleUrls: ['./commune.component.scss'],
})
export class CommuneComponent implements OnInit {

  constructor(private apiService: ApiControllerService) { }

  communes;

  ngOnInit() {
    let communeObservable = this.apiService.getCommunes();
    communeObservable.subscribe((val: Communes) => {
      this.communes = val;
      console.log(val);
    });
  }

}
