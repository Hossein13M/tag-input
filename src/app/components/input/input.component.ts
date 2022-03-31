import { Component, Input } from '@angular/core';
import { TagModel } from '../../models/tag.model';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
})
export class InputComponent {
    @Input() dataList: Array<TagModel> = [];

    constructor() {}
}
