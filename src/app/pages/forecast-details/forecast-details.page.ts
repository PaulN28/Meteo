import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Forecast } from 'src/app/models/forecast.models';
import { ForecastService } from 'src/app/services/forecast.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-forecast-details',
  templateUrl: './forecast-details.page.html',
  styleUrls: ['./forecast-details.page.scss'],
})
export class ForecastDetailsPage implements OnInit {
  forecast;
  detail;
  forecast_list;
  constructor(private route: ActivatedRoute, private forecastService: ForecastService, private socialSharing: SocialSharing) {}

  getForecastDetails(dt : string, city: string) {
    this.forecastService.getForecastByCity(city).subscribe(forecast => {
      this.forecast = forecast;
      this.forecast_list = forecast["list"];
      this.forecast_list.forEach(element => {
        if (element['dt'] == dt) { this.detail = element }; //dt a été choisi comme id, permet d'afficher un détail
      })
    });
  }

  //Partage via Android / IOS, nécessité d'utiliser un APK, native feature
  share() {
    this.socialSharing
        .share('Découvrez la météo de ' + this.forecast.city.name +
              'Heure : ' + this.detail.dt_txt + 
              'Température' + this.detail.main.temp + '°' +
              'Description' + this.detail.weather[0].main);
  }

  ngOnInit() {
    const dt : string = this.route.snapshot.params.dt;
    this.getForecastDetails(dt, 'metz')
  }
}
