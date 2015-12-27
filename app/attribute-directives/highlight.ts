/**
 * Created by akrumins on 17/12/2015.
 */
import {Directive, ElementRef, Renderer, Input} from 'angular2/core';

@Directive({
    selector: '[myHighlight]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class Highlight {
    constructor(private el: ElementRef, private renderer: Renderer) {
    }
    onMouseEnter() { this._highlight("green",'pointer');this._pulse(); }
    onMouseLeave() { this._highlight(null,null); }
    private _highlight(color: string,style:string) {
        this.renderer.setElementStyle(this.el, 'backgroundColor', color);
        this.renderer.setElementStyle(this.el, 'cursor', style);

    }

    private _pulse(){
        TweenMax.to(this.el.nativeElement, 0.1, {scaleX:0.9, scaleY:0.9, force3D:true, yoyo:true, repeat:1, ease:Power1.easeInOut});
    }
}