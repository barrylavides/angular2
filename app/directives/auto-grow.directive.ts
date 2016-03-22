import {Directive, ElementRef, Input} from 'angular2/core';
@Directive({
    selector: '[autoGrow]',
	host: {
    	'(focus)': 'onFocus()',
    	'(blur)': 'onBlur()'
  	}
})
export class AutoGrowDirective {
  constructor(private el: ElementRef) {}

	onFocus() {
		this.el.nativeElement.style.width = '400';
	}
  	onBlur() {
  		this.el.nativeElement.style.width = '100';
  	}
}