/**
 * Created by arnoldkrumins on 28/12/2015.
 */
import {Component,Input,Output,EventEmitter} from 'angular2/core';
import {weatherstats} from "../models/weatherstats";
import {WeatherService} from "../services/WeatherService";
import {SpinnerProgress} from '../attribute-directives/spinner';

@Component({
    selector: 'weather-statistics',
    providers:[WeatherService],
    directives:[SpinnerProgress],
    styles:[`.weather-stats{ color:#FFF;}`,`.weather-stats div { margin-top:5px; }`,`.weather-stats p { margin-bottom:-5px; }`],
    template: `<div mySpinner busy="busy" class="weather-stats">
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

    //@Output() busy: EventEmitter<boolean> = new EventEmitter();
    //@Output() complete = new EventEmitter();

    busy:boolean = false;

    constructor(public service: WeatherService){}


    getWeather(cityname:string){
        this.busy = true;
        //this.busy.emit(true);
        this.service.getWeather(cityname)
            .subscribe(
                data => {
                    this.stats = data;
                    console.log(this.stats);
                    this.busy=false;
                    //this.busy.emit(false);
                },
                error => console.log(error)
            );
    }
}
