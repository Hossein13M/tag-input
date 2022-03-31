import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TagService } from './services/tag.service';
import { TagChipComponent } from './components/tag-chip/tag-chip.component';
import { MirageService } from './services/mirage.service';
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';

@NgModule({
    declarations: [AppComponent, TagChipComponent, InputComponent, AutocompleteComponent],
    imports: [BrowserModule, HttpClientModule, FormsModule],
    providers: [TagService, MirageService],
    bootstrap: [AppComponent],
})
export class AppModule {}
