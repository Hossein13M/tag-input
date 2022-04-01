import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { TagModel } from '../../models/tag.model';
import { ShareService } from '../../services/share.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnChanges {
    public isDarkTheme!: boolean;
    public linkIndex: number = 0;
    private arrowKeyFunctions = {
        ArrowDown: () => this.linkIndex < this.allSuggestionList.length - 1 && this.linkIndex++,
        ArrowUp: () => this.linkIndex > 0 && this.linkIndex--,
    };
    public newTagText: string = '';

    @Input() shouldListBeShown!: boolean;
    @Input() allSuggestionList: Array<TagModel> = [];
    @Input() searchedValue: string = '';
    @Output() suggestionClick: EventEmitter<TagModel> = new EventEmitter<TagModel>();
    @Output() suggestionListSelectionClick: EventEmitter<boolean> = new EventEmitter<boolean>();

    public filteredSuggestionsList: Array<TagModel> = [];

    constructor(private shareService: ShareService) {
        this.shareService.checkForNavigationWithinTheInput().subscribe((response: 'ArrowDown' | 'ArrowUp') => {
            response === 'ArrowDown' ? this.arrowKeyFunctions.ArrowDown() : this.arrowKeyFunctions.ArrowUp();
        });

        this.shareService.checkForClickStatusForInput().subscribe(() => (this.linkIndex = 0));

        this.shareService.checkForEnterKeyPressOnEmptyInput().subscribe(() => {
            this.shareService.hasItemBeenSelectedFromSuggestionList();
            this.onSuggestionSelection(this.allSuggestionList[this.linkIndex]);
        });

        this.shareService.getSearchValueFromInput().subscribe((value: string) => {
            this.newTagText = value;
            value === ''
                ? (this.filteredSuggestionsList = this.allSuggestionList)
                : (this.filteredSuggestionsList = this.allSuggestionList.filter((item: TagModel) => item.label.toLowerCase().includes(value.toLowerCase())));
        });
    }

    public onSuggestionSelection(suggestion: TagModel): void {
        this.suggestionClick.emit(suggestion);
        this.suggestionListSelectionClick.emit(false);
        this.shareService.hasClickedInsideList();
    }

    ngOnChanges(): void {
        this.isDarkTheme = localStorage.getItem('theme') === 'dark';
        this.filteredSuggestionsList = this.allSuggestionList;
    }

    public returnProperClassToActiveLi(index: number): 'activeSearchLinkLightTheme' | 'activeSearchLinkDarkTheme' | void {
        if (this.linkIndex !== index) {
            return;
        } else {
            return this.isDarkTheme ? 'activeSearchLinkDarkTheme' : 'activeSearchLinkLightTheme';
        }
    }
}
