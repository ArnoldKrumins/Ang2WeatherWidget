/**
 * Created by arnoldkrumins on 15/12/2015.
 */
import {Injectable,Inject} from 'angular2/core';
import {Http, HTTP_PROVIDERS,Response} from 'angular2/http';
import 'rxjs/add/operator/map';

import {city} from '../models/city';
import {weatherstats} from '../models/weatherstats';


@Injectable()
export class WeatherService {

    private key:string ='876a061edb38ada7e9f7206d03e0fffb';
    private url:string = 'http://api.openweathermap.org/data/2.5/weather?q=';

    private cities:Array<city> = [];

    constructor(public http:Http){}

    getCities():any {

        return this.http.get('./app/data/cities.json')
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
            });

    }


    getWeather():any{
        return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=q=London,uk&appid=876a061edb38ada7e9f7206d03e0fffb')
            .map(res=> res.json())
            .map((stats: any) => {
                let result : weatherstats = new weatherstats(0);
                if (stats) {
                    result.temperture = stats.main.temp ;
                }
                return result;
            });

    }
}