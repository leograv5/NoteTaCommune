import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommunePageRoutingModule } from './commune-routing.module';

import { CommunePage } from './commune.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommunePageRoutingModule
  ],
  declarations: [CommunePage]
})
export class CommunePageModule {}
