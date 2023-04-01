import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Demo01Component } from './components/demos/demo01/demo01.component';
import { Demo02Component } from './components/demos/demo02/demo02.component';
import { FormsModule } from '@angular/forms';
import { Demo03Component } from './components/demos/demo03/demo03.component';
import { Exo03Component } from './exercices/exo03/exo03.component';
import { FormatTimePipe } from './shared/pipes/format-time.pipe';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { Exo07Component } from './exercices/exo07/exo07.component';
import { CelToFahPipe } from './shared/pipes/cel-to-fah.pipe';
import { FahToCelPipe } from './shared/pipes/fah-to-cel.pipe';
import { TemperaturePipe } from './shared/pipes/temperature.pipe';
import { Exo09Component } from './exercices/exo09/exo09.component';

@NgModule({
  declarations: [
    // MatMenuModule, // TODO : Fais bug le programme

    AppComponent,
    HomeComponent,
    Demo01Component,
    Demo02Component,
    Demo03Component,
    Exo03Component,
    FormatTimePipe,
    NavbarComponent,
    Exo07Component,
    CelToFahPipe,
    FahToCelPipe,
    TemperaturePipe,
    Exo09Component,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FormatTimePipe, CelToFahPipe],
})
export class AppModule {}
