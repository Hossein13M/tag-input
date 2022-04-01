import { Component, EventEmitter, Output } from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
    selector: 'app-base-text-input',
    templateUrl: './base-text-input.component.html',
    styleUrls: ['./base-text-input.component.scss'],
})
export class BaseTextInputComponent {
    public inputValue: string = '';
    @Output() inputValueSelection: EventEmitter<string> = new EventEmitter<string>();
    @Output() showSuggestionList: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() navigateInList: EventEmitter<number> = new EventEmitter<number>();

    constructor(private shareService: ShareService) {}

    public onTagValue(inputValue: string): void {
        this.showSuggestionList.emit(false);
        this.inputValueSelection.emit(inputValue);
        this.inputValue = '';
    }

    public checkKey(event: KeyboardEvent): void {
        const validTagCreateKeys: Array<string> = ['Enter', ','];
        const validNavigationKeys: Array<string> = ['ArrowDown', 'ArrowUp'];

        if (event.key === 'Escape') this.showSuggestionList.emit(false);
        else if (validNavigationKeys.includes(event.key)) {
            this.shareService.hasNavigatedWithinTheInput(event.key as 'ArrowDown' | 'ArrowUp');
        } else if (validTagCreateKeys.includes(event.key)) {
            if (event.key === ',') {
                this.onTagValue(this.inputValue.slice(0, -1));
            } else if (event.key === 'Enter') {
                if (!this.inputValue) {
                    this.shareService.hasPressedEnterKeyOnEmptyInput();
                } else {
                    this.onTagValue(this.inputValue);
                }
            }
        } else {
            this.shareService.storeNewValueForInput(this.inputValue);
        }
    }

    public onFocus(): void {
        this.shareService.hasClickedInsideInput();
        this.showSuggestionList.emit(true);
    }

    public onBlur(): void {
        setTimeout(() => this.shareService.checkForClickStatusForList() && this.showSuggestionList.emit(false), 200);
    }
}
