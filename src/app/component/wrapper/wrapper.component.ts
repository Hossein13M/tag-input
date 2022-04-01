import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TagModel } from '../../models/tag.model';

@Component({
    selector: 'app-wrapper',
    templateUrl: './wrapper.component.html',
    styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent {
    // input and outputs for chip (tag-input)
    @Input() tags: TagModel[] = [];
    @Output() tagRemove: EventEmitter<TagModel> = new EventEmitter<TagModel>();
    // input and output for suggestions list
    @Input() suggestionsList: TagModel[] = [];
    @Output() suggestionSelect: EventEmitter<TagModel> = new EventEmitter<TagModel>();
    public shouldListBeShown: boolean = false;
    // input and output for search input
    @Output() inputValue: EventEmitter<string> = new EventEmitter<string>();

    constructor() {}

    public onTagDelete(tag: TagModel) {
        this.tagRemove.emit(tag);
    }

    public onSuggestionSelection(suggestion: TagModel) {
        this.suggestionSelect.emit(suggestion);
    }

    public onInputValueEvent(inputValue: string) {
        this.inputValue.emit(inputValue);
    }

    public showList(event: boolean) {
        this.shouldListBeShown = event;
    }

    public closeSuggestionList(event: boolean) {
        this.shouldListBeShown = event;
    }
}
