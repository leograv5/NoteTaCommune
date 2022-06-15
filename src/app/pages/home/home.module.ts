import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CommunesComponent } from 'src/app/components/communes/communes.component';
import { CommuneComponent } from 'src/app/components/commune/commune.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  entryComponents: [CommunesComponent],
  declarations: [HomePage, CommunesComponent, CommuneComponent],
})
export class HomePageModule {}
