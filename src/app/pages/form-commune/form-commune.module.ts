import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormCommunePageRoutingModule } from './form-commune-routing.module';

import { FormCommunePage } from './form-commune.page';
import { GeolocationComponent } from 'src/app/components/geolocation/geolocation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormCommunePageRoutingModule,
  ],
  declarations: [FormCommunePage, GeolocationComponent,]
})
export class FormCommunePageModule {

}
