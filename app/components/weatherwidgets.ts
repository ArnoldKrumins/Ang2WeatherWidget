/**
 * Created by akrumins on 16/12/2015.
 */
import {Component} from 'angular2/core';

import {city} from '../models/city';
import {weatherstats} from '../models/weatherstats';

import 'rxjs/add/operator/map';
import {WeatherService} from "../services/WeatherService";

import {Highlight} from "../attribute-directives/highlight";
import {WeatherStatistics} from "./weatherstats";



@Component({
    selector: 'weather-widgets',
    providers:[WeatherService],
    directives:[Highlight,WeatherStatistics],
    template: `<div class="weather-widgets col-sm-12 col-md-12 col-lg-12">
                  <ul>
                    <li *ngFor="#city of cities">
                        <div myHighlight class="widget">
                          <strong><p>{{ city.name }}</p></strong>
                             <weather-statistics [stats]="stats" [cityname]="city.name"></weather-statistics>
                        </div>
                    </li>
                  </ul>
                   <div>

                   </div>
               </div>`
})
export class WeatherWidgets {

    public cities:Array<city> = [];
    public stats: weatherstats = new weatherstats();

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



}