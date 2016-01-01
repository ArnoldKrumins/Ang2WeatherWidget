/**
 * Created by arnoldkrumins on 01/01/2016.
 */
import {Injectable,Inject} from 'angular2/core';

@Injectable()
export class IconService{

    public getIcon(icon:number):string {

        switch(true)
        {
          case (icon === 800) : //Clear
            return "wi-day-sunny";
          case (icon > 5000) ://Light Rain
              return "wi-day-rain";
          case (icon > 800 && icon <= 805) : //Clouds
              return "wi-cloudy";
          default :
                return "wi-na";
        }


    }


}

//F3Z5HWWQM3CN