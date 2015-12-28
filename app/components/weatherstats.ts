/**
 * Created by arnoldkrumins on 28/12/2015.
 */
import {Component,Input} from 'angular2/core';
import {weatherstats} from "../models/weatherstats";
import {WeatherService} from "../services/WeatherService";

@Component({
    selector: 'weather-statistics',
    providers:[WeatherService],
    template: `<div>
                <button class="btn btn-sm btn-success" (click)="getWeather(cityname)">Get Weather</button>
                <p>{{ stats.temperture }}</p>
               </div>`
})
export class WeatherStatistics {
    @Input() stats: weatherstats;
    @Input() cityname: string;

    constructor(public service: WeatherService){

    }


    getWeather(cityname:string){
        this.service.getWeather(cityname)
            .subscribe(
                data => {
                    this.stats = data;
                    console.log(this.stats);
                },
                error => console.log(error)
            );
    }
}
