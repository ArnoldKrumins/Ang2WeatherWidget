/**
 * Created by arnoldkrumins on 28/12/2015.
 */
import {Component,Input} from 'angular2/core';
import {weatherstats} from "../models/weatherstats";
import {WeatherService} from "../services/WeatherService";

@Component({
    selector: 'weather-statistics',
    providers:[WeatherService],
    styles:[`.weather-stats{ color:#FFF;}`,`.weather-stats div { margin-top:5px; }`,`.weather-stats p { margin-bottom:-5px; }`],
    template: `<div class="weather-stats">
                <button class="btn btn-sm btn-success" (click)="getWeather(cityname)">Get Weather</button>
                    <div>
                        <p>{{ stats.weather }}</p>
                        <p>{{ stats.description }}</p>
                    </div>
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
