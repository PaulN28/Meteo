import { Component, OnInit } from "@angular/core";
import { ForecastService } from "../../services/forecast.service";
import { Forecast } from "src/app/models/forecast.models";

@Component({
  selector: "app-forecast",
  templateUrl: "./forecast.page.html",
  styleUrls: ["./forecast.page.scss"]
})
export class ForecastPage implements OnInit {
  forecast;
  forecast_list;
  constructor(private forecastService: ForecastService) {}

  getForecastByCity(city: string) {
    this.forecastService.getForecastByCity(city).subscribe(forecast => {
      this.forecast = forecast;
      this.forecast_list = forecast["list"]; //sous-tableau list de l'API
    });
  }

  ngOnInit() {
    this.getForecastByCity('metz')
  }
}
