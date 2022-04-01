import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TagService } from './services/tag.service';
import { MirageService } from './services/mirage.service';
import { AppComponent } from './app.component';
import { BaseTextInputComponent } from './components/base-text-input/base-text-input.component';
import { ListComponent } from './components/list/list.component';
import { TagInputComponent } from './components/tag-input/tag-input.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [AppComponent, BaseTextInputComponent, ListComponent, TagInputComponent, WrapperComponent],
    imports: [BrowserModule, HttpClientModule, FormsModule, BrowserAnimationsModule],
    providers: [TagService, MirageService],
    bootstrap: [AppComponent],
})
export class AppModule {}
