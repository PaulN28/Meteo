import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaMeteoPage } from './ma-meteo.page';

const routes: Routes = [
  {
    path: '',
    component: MaMeteoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaMeteoPageRoutingModule {}
