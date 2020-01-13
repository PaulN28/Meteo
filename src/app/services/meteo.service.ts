import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meteo } from '../models/meteo.models';

@Injectable({
    providedIn: 'root'
  })
  export class MeteoService {

    getDataByCity(city : string){
      return this.http
        .get('https://api.openweathermap.org/data/2.5/weather?q='+ city +'&units=metric&lang=fr&appid=447709f0836f033e8a05e7faa8511bb7');
    }

    getDataByCoords(lat : number, lon : number){
      return this.http
        .get('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=metric&lang=fr&appid=447709f0836f033e8a05e7faa8511bb7');
    }

    constructor(private http: HttpClient) { 
    }
}