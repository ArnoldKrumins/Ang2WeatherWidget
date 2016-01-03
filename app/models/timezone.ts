export class timezone{

    public timestamp:number;
    public isPm:boolean = false;


    constructor(timestamp:number){
        this.timestamp = timestamp;
        let now = moment.unix(this.timestamp);
        if(now.hour() >= 18) this.isPm = true;
    }

}


