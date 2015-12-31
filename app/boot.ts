/**
 * Created by arnoldkrumins on 15/12/2015.
 */

import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {WeatherService} from "./services/WeatherService";
import {HTTP_PROVIDERS} from "angular2/http";
import {enableProdMode} from "angular2/core";


//enableProdMode();
bootstrap(AppComponent,[WeatherService,HTTP_PROVIDERS]);