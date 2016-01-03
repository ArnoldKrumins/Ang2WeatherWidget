/**
 * Created by arnoldkrumins on 03/01/2016.
 */
import {timezone} from "../models/timezone";


describe('TimeZone Service TestFixture',() => {

    it('The unix date should return isPm equal to true',() => {

        let t = new timezone(1451850922);
        expect(t.isPm).toEqual(true);
    })


    it('The unix date should return isPm equal to false',() => {

        let t = new timezone(1451892809);
        expect(t.isPm).toEqual(false);
    })



})
