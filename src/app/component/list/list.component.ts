import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TagModel } from '../../models/tag.model';
import { ShareService } from '../../services/share.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
})
export class ListComponent {
    public linkIndex: number = 0;
    private arrowKeyFunctions = {
        ArrowDown: () => this.linkIndex < this.suggestionList.length - 1 && this.linkIndex++,
        ArrowUp: () => this.linkIndex > 0 && this.linkIndex--,
    };

    @Input() shouldListBeShown!: boolean;
    @Input() suggestionList: Array<TagModel> = [];
    @Output() suggestionClick: EventEmitter<TagModel> = new EventEmitter<TagModel>();
    @Output() suggestionListSelectionClick: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private shareService: ShareService) {
        this.shareService.checkForNavigationWithinTheInput().subscribe((response: 'ArrowDown' | 'ArrowUp') => this.arrowKeyFunctions[response]());
        this.shareService.checkForClickStatusForInput().subscribe(() => (this.linkIndex = 0));

        this.shareService.checkForEnterKeyPressOnEmptyInput().subscribe(() => {
            this.shareService.hasItemBeenSelectedFromSuggestionList();
            this.onSuggestionSelection(this.suggestionList[this.linkIndex]);
        });
    }

    public onSuggestionSelection(suggestion: TagModel): void {
        this.suggestionClick.emit(suggestion);
        this.suggestionListSelectionClick.emit(false);
        this.shareService.hasClickedInsideList();
    }
}
