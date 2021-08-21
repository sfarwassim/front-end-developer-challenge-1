import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';


import { SearchfilterPipe } from './searchfilter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    SearchfilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
