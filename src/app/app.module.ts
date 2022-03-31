import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TagService } from './services/tag.service';
import { MirageService } from './services/mirage.service';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HttpClientModule],
    providers: [TagService, MirageService],
    bootstrap: [AppComponent],
})
export class AppModule {}
