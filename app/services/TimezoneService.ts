import {api} from "../interfaces/api";
import {weatherstats} from "../models/weatherstats";
import {Injectable,Inject} from 'angular2/core';
import {Http, HTTP_PROVIDERS,Response} from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

@Injectable()
export class TimezoneService implements api{

    url:string = "http://api.timezonedb.com/";
    key:string = "F3Z5HWWQM3CN";

    constructor(public http:Http){}

    get(lat:string,lng:string):any {
       return this.http.get(this.url.concat('?lat=',lat,'&lng=',lng,'&format=json','&key=', this.key))
                .delay(1000)
                .map(res=> res.json())
                .map((stats: any) => {
                    let result : weatherstats = new weatherstats();
                    if (stats) {
                        result.weather     = stats.weather[0].main;
                        result.icon        = stats.weather[0].id;
                        result.description = stats.weather[0].description;

                    }
                    return result;
                });
    }

    //private url:string = "http://api.timezonedb.com/?lat=35.69&lng=139.69&key=";
    //private key:string = "F3Z5HWWQM3CN";
    //
    //
    //get(cityname:string):any{
    //    return this.http.get(this.url.concat(cityname,'&appid=',this.key))
    //        .delay(1000)
    //        .map(res=> res.json())
    //        .map((stats: any) => {
    //            let result : weatherstats = new weatherstats();
    //            if (stats) {
    //                result.weather     = stats.weather[0].main;
    //                result.icon        = stats.weather[0].id;
    //                result.description = stats.weather[0].description;
    //
    //            }
    //            return result;
    //        });
    //
    //}

}