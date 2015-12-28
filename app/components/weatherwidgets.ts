/**
 * Created by akrumins on 16/12/2015.
 */
import {Component} from 'angular2/core';

import {city} from '../models/city';
import {weatherstats} from '../models/weatherstats';

import 'rxjs/add/operator/map';
import {WeatherService} from "../services/WeatherService";
import {Highlight} from "../attribute-directives/highlight";



@Component({
    selector: 'weather-widgets',
    providers:[WeatherService],
    directives:[Highlight],
    template: `<div class="weather-widgets col-sm-12 col-md-12 col-lg-12">
                  <ul>
                    <li *ngFor="#c of cities">
                        <div myHighlight class="widget">
                          <strong><p>{{ c.name }}</p></strong>
                          <button class="btn btn-sm btn-success" (click)="getWeather()">Get Weather</button>
                             <p>{{ stats.temperture }}</p>
                        </div>
                    </li>
                  </ul>
                   <div>

                   </div>
               </div>`
})
export class WeatherWidgets {

    public cities:Array<city> = [];
    public stats: weatherstats = new weatherstats(0);

    constructor(public service:WeatherService){
        this.service.getCities()
        .subscribe(
            data => {
                this.cities = data;
                console.log(this.cities);
            },
            error => console.log(error)
        );
    };

    getWeather(){
        this.service.getWeather()
        .subscribe(
            data => {
                this.stats = data;
                console.log(this.stats);
            },
            error => console.log(error)
        );
    }

}