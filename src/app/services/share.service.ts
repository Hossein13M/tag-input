import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ShareService {
    private hasBeenClickedInsideList: BehaviorSubject<any> = new BehaviorSubject(false);
    private hasBeenClickedInsideInput: BehaviorSubject<any> = new BehaviorSubject(false);
    private navigateWithinInput: BehaviorSubject<any> = new BehaviorSubject(null);
    private hasPressedEnterOnEmptyInput: BehaviorSubject<any> = new BehaviorSubject(false);
    private hasItemSelectedFromSuggestionWithKey: BehaviorSubject<any> = new BehaviorSubject(false);
    private searchValue: BehaviorSubject<any> = new BehaviorSubject(null);

    constructor() {}

    public hasClickedInsideList(): void {
        this.hasBeenClickedInsideList.next(true);
    }

    public checkForClickStatusForList(): Observable<boolean> {
        return this.hasBeenClickedInsideList.asObservable();
    }

    public hasClickedInsideInput(): void {
        this.hasBeenClickedInsideInput.next(true);
    }

    public checkForClickStatusForInput(): Observable<boolean> {
        return this.hasBeenClickedInsideInput.asObservable();
    }

    public hasNavigatedWithinTheInput(navDirection: 'ArrowDown' | 'ArrowUp'): void {
        this.navigateWithinInput.next(navDirection);
    }

    public checkForNavigationWithinTheInput(): Observable<'ArrowDown' | 'ArrowUp'> {
        return this.navigateWithinInput.asObservable();
    }

    public hasPressedEnterKeyOnEmptyInput(): void {
        this.hasPressedEnterOnEmptyInput.next(true);
    }

    public checkForEnterKeyPressOnEmptyInput(): Observable<boolean> {
        return this.hasPressedEnterOnEmptyInput.asObservable();
    }

    public hasItemBeenSelectedFromSuggestionList(): void {
        this.hasItemSelectedFromSuggestionWithKey.next(true);
    }

    public checkForKeySelectionFromSuggestion(): Observable<boolean> {
        return this.hasItemSelectedFromSuggestionWithKey.asObservable();
    }

    public storeNewValueForInput(searchValue: string): void {
        this.searchValue.next(searchValue);
    }

    public getSearchValueFromInput(): Observable<string> {
        return this.searchValue.asObservable();
    }
}
