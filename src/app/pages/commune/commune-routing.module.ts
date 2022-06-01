import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunePage } from './commune.page';

const routes: Routes = [
  {
    path: '',
    component: CommunePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommunePageRoutingModule {}
