import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [{ path: '', component: AppComponent }];

@NgModule({
    declarations: [],
    imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
