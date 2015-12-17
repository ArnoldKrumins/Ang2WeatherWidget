/**
 * Created by arnoldkrumins on 15/12/2015.
 */
import {Injectable,Inject} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Injectable()
export class WeatherService {

    private key:string ='876a061edb38ada7e9f7206d03e0fffb';
    private url:string = 'http://api.openweathermap.org/data/2.5/weather?q=';

    private cities:any[] = [
        {id:'1',name:'London'},
        {id:'2',name:'Gothenburg'},
        {id:'3',name:'Melbourne'},
        {id:'4',name:'New York'},
        {id:'5',name:'Sydney'},
        ];

    wdata:any;
    error:any;

    constructor(public http:Http){}

    getCities(){
       return this.cities;
    }

    getData() {
        this.http.get('http://api.openweathermap.org/data/2.5/weather?q=q=London,uk&appid=876a061edb38ada7e9f7206d03e0fffb')
            .subscribe(
                data => this.wdata = data,
                err => this.error(err),
                () => console.log(this.wdata)
            );
    }
}