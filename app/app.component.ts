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

    data:any;
    error:any;


    constructor(public service: WeatherService, public http:Http) {
        this.data = service.getCities();
    }

    getWeather(){
        this.service.getData();
    }


    getWeatherData() {
        this.http.get('http://api.openweathermap.org/data/2.5/weather?q=q=London,uk&appid=876a061edb38ada7e9f7206d03e0fffb')
            .subscribe(
                data => this.data = data,
                err => this.error(err),
                () => console.log(this.data)
            );
    }


}