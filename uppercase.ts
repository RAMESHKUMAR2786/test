import { Directive, EventEmitter, Output } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
    selector: '[ngModel][UpperCase]',
    host: {
        "(input)": 'onInputChange($event)'
    }
})
export class UpperCase {
    @Output() ngModelChange: EventEmitter<any> = new EventEmitter();
    value: any;

    onInputChange($event) {
        this.value = $event.target.value;
        this.ngModelChange.emit(this.value);
    }
}