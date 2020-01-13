import { Component, OnInit } from "@angular/core";
import { Meteo } from "src/app/models/meteo.models";
import { MeteoService } from "src/app/services/meteo.service";
import { Geolocation } from "@ionic-native/geolocation/ngx";

@Component({
  selector: "app-ma-meteo",
  templateUrl: "./ma-meteo.page.html",
  styleUrls: ["./ma-meteo.page.scss"]
})
export class MaMeteoPage implements OnInit {
  weather;

  constructor(
    private geolocation: Geolocation,
    private meteoService: MeteoService
  ) {}

  getWeatherByCity(city: string) {
    this.meteoService.getDataByCity(city).subscribe(data => {
      this.weather = data;
    });
  }


  ngOnInit() {
  }
}
