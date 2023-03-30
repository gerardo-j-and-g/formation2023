import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Demo01Component } from './components/demos/demo01/demo01.component';
import { Demo02Component } from './components/demos/demo02/demo02.component';
import { FormsModule } from '@angular/forms';
import { Demo03Component } from './components/demos/demo03/demo03.component';
import { Exo03Component } from './exercices/exo03/exo03.component';
import { FormatTimePipe } from './pipes/format-time.pipe';

@NgModule({
  declarations: [AppComponent, HomeComponent, Demo01Component, Demo02Component, Demo03Component, Exo03Component, FormatTimePipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    FormatTimePipe
  ],
})
export class AppModule {}
