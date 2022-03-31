import { Component, OnInit } from '@angular/core';
import { TagService } from './services/tag.service';
import { MirageService } from './services/mirage.service';
import { TagModel } from './models/tag.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public tags: Array<TagModel> = [];

    constructor(private tagService: TagService, private readonly mirageService: MirageService) {}

    ngOnInit(): void {
        this.mirageService.mirageJsServer();
        this.getTags();
    }

    private getTags(): void {
        this.tagService.getTags().subscribe((response: Array<TagModel>) => (this.tags = response));
    }

    public removeTag(event: TagModel): void {
        this.tagService.removeTag(event).subscribe(() => this.getTags());
    }
}
