import { Component, OnInit } from '@angular/core';
import { ApiControllerService } from 'src/app/services/api-controller.service';

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
    communeObservable.subscribe(val => this.communes = val);
  }

}
