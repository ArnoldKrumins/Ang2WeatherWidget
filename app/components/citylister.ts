/**
 * Created by arnoldkrumins on 15/12/2015.
 */
import {Component} from 'angular2/core';

@Component({
    selector: 'city-lister',
    template: `<select>
                  <option value="0">London</option>
                  <option value="1">Gothenburg</option>
                  <option value="2">Edinburgh</option>
              </select>`
})
export class CityLister { }