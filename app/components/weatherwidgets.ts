/**
 * Created by akrumins on 16/12/2015.
 */
import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS,Response} from 'angular2/http';
import 'rxjs/add/operator/map';
import {WeatherService} from "../services/WeatherService";
import {Highlight} from "../attribute-directives/highlight";
import {city} from '../models/city';

@Component({
    selector: 'weather-widgets',
    providers:[WeatherService],
    directives:[Highlight],
    template: `<div class="weather-widgets col-sm-12 col-md-12 col-lg-12">
                  <ul>
                    <li *ngFor="#c of cities">
                        <div myHighlight class="widget">
                          <strong><p>{{ c.name }}</p></strong>
                        </div>
                    </li>
                  </ul>
               </div>`
})
export class WeatherWidgets {

    cities:Array<city> = [];
    error:any;


    constructor(public http:Http){
        this.getCities();
    }


    //constructor(public service:WeatherService){
    //    this.getCities();
    //    };


    getCities(){

        this.http.get('./app/data/cities.json')
            .map(res=> res.json())
            .map((cities: Array<any>) => {
                let result: Array<city> = [];
                if (cities) {
                    cities.forEach(c => {
                        result.push(
                            new city(
                                c.id,
                                c.name
                                ));
                    });
                }

                return result;
            }).
        subscribe(
            data => {
                this.cities = data;
                console.log(this.cities);
            },
            err => console.log(err)
        );
    }

}