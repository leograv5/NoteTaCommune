import { Component, Input, OnInit } from '@angular/core';
import { Commune } from 'src/app/interfaces/commune';
import { ApiControllerService } from 'src/app/services/api-controller.service';

@Component({
  selector: 'app-commune',
  templateUrl: './commune.component.html',
  styleUrls: ['./commune.component.scss'],
})
export class CommuneComponent implements OnInit {

  imageFileName;

  @Input() commune:Commune;

  constructor(private apiService: ApiControllerService) { }

  ngOnInit() {
  
  }

}
