/**
 * Created by arnoldkrumins on 28/12/2015.
 */
import {Component,Input,Output,EventEmitter} from 'angular2/core';
import {weatherstats} from "../models/weatherstats";
import {WeatherService} from "../services/WeatherService";
import {SpinnerProgress} from '../attribute-directives/spinner';
import {IconService} from "../services/IconService";

@Component({
    selector: 'weather-statistics',
    providers:[WeatherService,IconService],
    directives:[SpinnerProgress],
    styles:[`.weather-stats{ color:#FFF;}`,`.weather-stats div { margin-top:5px; }`,`.weather-stats p { margin-bottom:-5px; }`,`.weather-stats i{ font-size:50px;margin-top:20px; }`],
    template: `<div [mySpinner]="busy" class="weather-stats">
                <button class="btn btn-sm btn-success" (click)="getWeather(cityname)">Get Weather</button>
                    <div>
                        <p>{{ stats.weather }}</p>
                        <p>{{ stats.description }}</p>
                        <i class="wi {{ getIcon(stats.icon) }}"></i>
                    </div>
               </div>`
})
export class WeatherStatistics implements OnInit {

    ngOnInit() {

       // console.log(this.cityname);
       // this.getWeather(this.cityname);
    }

    @Input() cityname;

    private stats: weatherstats = new weatherstats();
    private busy:boolean = false;
    private icon:string;

    constructor(public service: WeatherService,public iconService: IconService){}

    getIcon(icon:number):string{
        return this.iconService.getIcon(icon);
    }

    getWeather(cityname:string){
        this.busy = true;
        this.service.getWeather(cityname)
            .subscribe(
                data => {
                    this.stats = data;
                    console.log(this.stats);
                    this.busy=false;
                },
                error => console.log(error)
            );
    }
}



//this.http.get('something')
//    .flatMap((result: any) => this.http.post('somethingElse', result))
//    .subscribe((lastResult: any) => {
//        console.log(lastResult); //result of second http post
//    });