import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'ma-meteo',
    loadChildren: () => import('./pages/ma-meteo/ma-meteo.module').then( m => m.MaMeteoPageModule)
  },
  {
    path: 'forecast',
    loadChildren: () => import('./pages/forecast/forecast.module').then( m => m.ForecastPageModule)
  },
  {
    path: 'forecast-details',
    loadChildren: () => import('./pages/forecast-details/forecast-details.module').then( m => m.ForecastDetailsPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/error404/error404.module').then( m => m.Error404PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
