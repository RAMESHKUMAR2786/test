import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

//import { MdInputModule } from '@angular/material';


@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [AppComponent],
  providers: [
  ],
  bootstrap: [AppComponent]

})

export class AppModule { }