/**
 * Created by arnoldkrumins on 15/12/2015.
 */
import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {CityLister} from './components/citylister'
import {WeatherService} from "./services/WeatherService";

@Component({
    selector: 'my-app',
    providers:[WeatherService],
    directives:[CityLister],
    template: '<h1>Hello First Angular 2 App</h1><city-lister></city-lister><button (click)="getWeather()">Get Weather</button>'
})
export class AppComponent {

    service:WeatherService;
    data:any;

    constructor(service: WeatherService) {
        this.data = service.getData('104');
    }

    getWeather(){
        console.log(this.data);
    }
}