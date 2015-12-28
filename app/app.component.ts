/**
 * Created by arnoldkrumins on 15/12/2015.
 */
import {Component} from 'angular2/core';
import {WeatherWidgets} from "./components/weatherwidgets";

@Component({
    selector: 'my-app',
    directives:[WeatherWidgets],
    template: `<weather-widgets></weather-widgets>`
})
export class AppComponent {}