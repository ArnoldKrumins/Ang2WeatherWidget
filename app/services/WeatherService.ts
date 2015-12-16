/**
 * Created by arnoldkrumins on 15/12/2015.
 */
import {Injectable,Inject} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Injectable()
export class WeatherService {

    private key:string ='876a061edb38ada7e9f7206d03e0fffb';
    private url:string = 'http://api.openweathermap.org/data/2.5/weather?q=';

    private data:any[] = [
        {id:'1',name:'London'},
        {id:'2',name:'Gothenburg'},
        {id:'3',name:'Melbourne'},
        {id:'4',name:'New York'},
        {id:'5',name:'Sydney'},
        ];

   //http:Http;

    cities: any[];

    //constructor(public http:Http){
        //this.http = http;
    //}

    getData(){
       return this.data;
    }

  /* getNetData(){

         this.http.get('./data/cities.json').subscribe(res => {
            this.cities = res.json();
        });
       return this.cities;
    }*/
}