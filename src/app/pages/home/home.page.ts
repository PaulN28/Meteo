import { Component } from "@angular/core";
import { Meteo } from "src/app/models/meteo.models";
import { MeteoService } from "src/app/services/meteo.service";
import { Geolocation } from "@ionic-native/geolocation/ngx";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  lat: number;
  lon: number;
  weather;

  constructor(
    private geolocation: Geolocation,
    private meteoService: MeteoService
  ) {}

  getWeatherByCoords() {
    this.getCurrentPosition().then( () => {
    this.meteoService.getDataByCoords(this.lat, this.lon).subscribe(data => {
      this.weather = data;
    });
  });
  }

  //native feature, renvoie la position courante, async est utilisé pour ne pas avoir de problème avant le chargement (undefined coords)
  async getCurrentPosition() {
    return this.geolocation
      .getCurrentPosition()
      .then(resp => {
        this.lat = resp.coords.latitude;
        this.lon = resp.coords.longitude;
      })
      .catch(error => {
        console.log("Error getting location", error);
      });
  }

  ngOnInit() {
    this.getWeatherByCoords();
  }
}
