import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TagModel } from '../../models/tag.model';

@Component({
    selector: 'app-tag-input',
    templateUrl: './tag-input.component.html',
    styleUrls: ['./tag-input.component.scss'],
})
export class TagInputComponent {
    @Input() tag!: TagModel;
    @Output() tagDelete: EventEmitter<TagModel> = new EventEmitter<TagModel>();

    constructor() {}

    public onTagClick(tag: TagModel) {
        this.tagDelete.emit(tag);
    }
}
