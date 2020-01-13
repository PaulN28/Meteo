import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

  export class ForecastService {

    getForecastByCity(city : string){
        return this.http
        .get('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&lang=fr&appid=447709f0836f033e8a05e7faa8511bb7');
    }

    getForecastDetails(dt : number, city : string){ 
      return this.http
      .get('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&lang=fr&appid=447709f0836f033e8a05e7faa8511bb7');
    }

    constructor(private http: HttpClient) { 
    }


  }