import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TagModel } from '../../models/tag.model';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
})
export class InputComponent {
    public inputValue: string = '';
    @Input() dataList: Array<TagModel> = [];
    @Output() value: EventEmitter<string> = new EventEmitter<string>();

    constructor() {}

    onTagValue(inputValue: string) {
        this.value.emit(inputValue);
        this.inputValue = '';
    }

    checkKey(event: KeyboardEvent) {
        const validTagCreateKeys: Array<string> = ['Enter', 'Tab', ','];
        if (validTagCreateKeys.includes(event.key)) {
            if (event.key === ',') {
                this.inputValue = this.inputValue.slice(0, -1);
            }
            this.onTagValue(this.inputValue);
        }
    }
}
