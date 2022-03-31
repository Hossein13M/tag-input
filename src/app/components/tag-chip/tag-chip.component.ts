import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TagModel } from '../../models/tag.model';

@Component({
    selector: 'app-tag-chip',
    templateUrl: './tag-chip.component.html',
    styleUrls: ['./tag-chip.component.scss'],
})
export class TagChipComponent {
    @Input() tag!: TagModel;
    @Output() tagDeleted = new EventEmitter<TagModel>();

    constructor() {}

    public removeTag(selectedTag: TagModel): void {
        this.tagDeleted.emit(selectedTag);
    }
}
