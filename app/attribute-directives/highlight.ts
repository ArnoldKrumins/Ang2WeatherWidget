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
    onMouseEnter() { this._highlight("yellow",'pointer'); }
    onMouseLeave() { this._highlight(null,null); }
    private _highlight(color: string,style:string) {
        this.renderer.setElementStyle(this.el, 'backgroundColor', color);
        this.renderer.setElementStyle(this.el, 'cursor', style);
    }
}