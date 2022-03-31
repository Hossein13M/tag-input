import { Component, OnInit } from '@angular/core';
import { TagService } from './services/tag.service';
import { MirageService } from './services/mirage.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    constructor(private readonly tagService: TagService, private readonly mirageService: MirageService) {}

    ngOnInit(): void {
        this.mirageService.mirageJsServer();
        this.getTags();
    }

    private getTags(): void {
        this.tagService.getTags().subscribe((tags) => {
            console.log(tags);
        });
    }
}
