import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForecastDetailsPage } from './forecast-details.page';

const routes: Routes = [
  {
    path: ':dt',
    component: ForecastDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForecastDetailsPageRoutingModule {}
