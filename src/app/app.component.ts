import { Component, OnInit } from '@angular/core';
import { TagService } from './services/tag.service';
import { MirageService } from './services/mirage.service';
import { TagModel } from './models/tag.model';
import { shuffleArray } from './const/tagsConst';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public tags: Array<TagModel> = [];
    public suggestions: Array<TagModel> = [];

    constructor(private tagService: TagService, private readonly mirageService: MirageService) {}

    ngOnInit(): void {
        this.mirageService.mirageJsServer();
        this.getTags();
        this.getSuggestions();
    }

    private getTags(): void {
        this.tagService.getTags().subscribe((response: Array<TagModel>) => (this.tags = response));
    }

    private getSuggestions(): void {
        this.tagService.getSuggestions().subscribe((response: Array<TagModel>) => (this.suggestions = shuffleArray(response)));
    }

    public removeTag(event: TagModel): void {
        this.tagService.removeTag(event).subscribe(() => this.getTags());
    }

    public selectSuggestion(suggestionItem: TagModel) {
        this.tagService.addTag(suggestionItem.label).subscribe(() => this.getTags());
    }

    public onInputValueChange(inputValue: string) {
        this.tagService.addTag(inputValue).subscribe(() => this.getTags());
    }
}
