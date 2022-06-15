import { Component, Input, OnInit } from '@angular/core';
import { Commune } from 'src/app/interfaces/commune';

@Component({
  selector: 'app-commune',
  templateUrl: './commune.component.html',
  styleUrls: ['./commune.component.scss'],
})
export class CommuneComponent implements OnInit {

  @Input() commune:Commune;

  constructor() { }

  ngOnInit() {}

}
