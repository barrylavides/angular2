import {Directive, ElementRef, Input} from 'angular2/core';
@Directive({
    selector: '[myHighlight]'
})
export class AutoGrowDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }
}