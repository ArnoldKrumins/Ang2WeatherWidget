/**
 * Created by arnoldkrumins on 27/12/2015.
 */
export class weatherstats{

    constructor(
        public temp:number,
        public minTemp:number,
        public maxTemp:number,
        public windSpeed: number,
        public windDirection:number,
        public cloudCover:number
    ){}
}