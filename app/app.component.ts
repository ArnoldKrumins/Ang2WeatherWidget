/**
 * Created by arnoldkrumins on 15/12/2015.
 */
import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {CityLister} from './components/citylister'
import {WeatherService} from "./services/WeatherService";
import {WeatherWidgets} from "./components/weatherwidgets";

@Component({
    selector: 'my-app',
    providers:[WeatherService],
    directives:[CityLister,WeatherWidgets],
    template: `<city-lister></city-lister><button (click)="getWeather()">Get Weather</button>
                <weather-widgets></weather-widgets>`
})
export class AppComponent {

    service:WeatherService;
    data:any;

    constructor(service: WeatherService) {
        this.data = service.getData();
    }

    getWeather(){
        console.log(this.data);
    }
}