/**
 * Created by arnoldkrumins on 09/01/2016.
 */
export class LoggerService {

    public log(msg: any)   { console.log(msg); }
    public error(msg: any) { console.error(msg); }
    public warn(msg: any)  { console.warn(msg); }

}