import { Component, OnInit } from '@angular/core';
import { ApiControllerService } from 'src/app/services/api-controller.service';

@Component({
  selector: 'test-balise',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {

  constructor(private apiService: ApiControllerService) { }

  commune;

  ngOnInit() {
    this.commune = this.apiService.getCommunes()
    console.log(this.commune);
  }

}
