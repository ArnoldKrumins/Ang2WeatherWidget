import {api} from "../interfaces/api";
import {weatherstats} from "../models/weatherstats";
import {Injectable,Inject} from 'angular2/core';
import {Http, HTTP_PROVIDERS,Response} from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import {timezone} from "../models/timezone";

@Injectable()
export class TimezoneService implements api{

    url:string = "http://api.timezonedb.com/";
    key:string = "F3Z5HWWQM3CN";

    constructor(public http:Http){}

    get(lat:string,lng:string):any {
       return this.http.get(this.url.concat('?lat=',lat,'&lng=',lng,'&format=json','&key=', this.key))
                .delay(1000)
                .map(res=> res.json())
                .map((tzdata: any) => {
                    let result : timezone = new timezone(tzdata.timezone);
                    return result;
                });
    }



}