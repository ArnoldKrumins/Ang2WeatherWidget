/**
 * Created by arnoldkrumins on 15/12/2015.
 */
import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {WeatherService} from "./services/WeatherService";

bootstrap(AppComponent,[WeatherService]);