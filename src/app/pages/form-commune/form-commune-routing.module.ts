import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormCommunePage } from './form-commune.page';

const routes: Routes = [
  {
    path: '',
    component: FormCommunePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormCommunePageRoutingModule {}
