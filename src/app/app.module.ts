import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TagService } from './services/tag.service';
import { TagChipComponent } from './components/tag-chip/tag-chip.component';
import { MirageService } from './services/mirage.service';
import { InputComponent } from './components/input/input.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { BaseTextInputComponent } from './component/base-text-input/base-text-input.component';
import { ListComponent } from './component/list/list.component';
import { TagInputComponent } from './component/tag-input/tag-input.component';
import { WrapperComponent } from './component/wrapper/wrapper.component';

@NgModule({
    declarations: [
        AppComponent,
        TagChipComponent,
        InputComponent,
        AutocompleteComponent,
        BaseTextInputComponent,
        ListComponent,
        TagInputComponent,
        WrapperComponent,
    ],
    imports: [BrowserModule, HttpClientModule, FormsModule],
    providers: [TagService, MirageService],
    bootstrap: [AppComponent],
})
export class AppModule {}
