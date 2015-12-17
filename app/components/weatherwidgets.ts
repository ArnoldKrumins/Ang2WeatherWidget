/**
 * Created by akrumins on 16/12/2015.
 */
import {Component} from 'angular2/core';
import {WeatherService} from "../services/WeatherService";

@Component({
    selector: 'weather-widgets',
    providers:[WeatherService],
    template: `<div class="weather-widgets col-sm-12 col-md-12 col-lg-12">
                  <ul>
                    <li *ngFor="#d of data">
                        <div class="widget">
                          <strong><p>{{ d.name }}</p></strong>
                        </div>
                    </li>
                  </ul>
               </div>`
})
export class WeatherWidgets {

    data:any;
    service:WeatherService

    constructor(service:WeatherService){
        this.service = service;
        this.data = this.service.getData();
    }

}