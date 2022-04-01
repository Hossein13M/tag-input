import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TagModel } from '../../models/tag.model';

@Component({
    selector: 'app-autocomplete',
    templateUrl: './autocomplete.component.html',
    styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent {
    @Input() tags: Array<TagModel> = [];
    @Output() addTag: EventEmitter<string> = new EventEmitter();
    @Output() removeTag: EventEmitter<TagModel> = new EventEmitter();

    constructor() {}

    addNewTag(newTag: string) {
        this.addTag.emit(newTag);
    }

    tagDeleted(event: TagModel): void {
        this.removeTag.emit(event);
    }
}
