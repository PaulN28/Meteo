import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaMeteoPageRoutingModule } from './ma-meteo-routing.module';

import { MaMeteoPage } from './ma-meteo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaMeteoPageRoutingModule
  ],
  declarations: [MaMeteoPage]
})
export class MaMeteoPageModule {}
