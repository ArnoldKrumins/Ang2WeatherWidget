/**
 * Created by arnoldkrumins on 29/12/2015.
 */

import {Directive, ElementRef, Renderer, Input} from 'angular2/core';

@Directive({
    selector: '[mySpinner]'
})

export class SpinnerProgress {

    @Input() busy:boolean;

     private spinner;
     private opts;

    constructor(private el: ElementRef, private renderer: Renderer) {

           this.opts = {
            lines: 12, // The number of lines to draw
            length: 10, // The length of each line
            width: 6, // The line thickness
            radius: 15, // The radius of the inner circle
            corners: 1, // Corner roundness (0..1)
            rotate: 0, // The rotation offset
            direction: 1, // 1: clockwise, -1: counterclockwise
            color: '#3691BB', // #rgb or #rrggbb or array of colors
            speed: 1.3, // Rounds per second
            trail: 52, // Afterglow percentage
            shadow: false, // Whether to render a shadow
            hwaccel: true, // Whether to use hardware acceleration
            className: 'spinner', // The CSS class to assign to the spinner
            zIndex: 2e9, // The z-index (defaults to 2000000000)
            top: '50%', // Top position relative to parent
            left: '50%' // Left position relative to parent
        };

        this.spinner = new Spinner(this.opts);

        console.log(this.busy);

        if(this.busy){
            this.Start();
        }else{
            this.Stop();
        }
    }

    private Start(){

        this.spinner.spin();
        this.el.nativeElement.append(this.spinner.el);
    }

    private Stop(){
        this.spinner.stop();
    }


    get(){
        console.log('hello');
    }
}