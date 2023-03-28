import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './demos/title/title.component';
import { UserComponent } from './demos/user/user.component';
import { Exo01Component } from './exercices/exo01/exo01.component';
import { NavbarComponent } from './exercices/exo01/navbar/navbar.component';
import { InfoComponent } from './exercices/exo01/info/info.component';
import { FooterComponent } from './exercices/exo01/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { Exo02Component } from './exercices/exo02/exo02.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    UserComponent,
    Exo01Component,
    NavbarComponent,
    InfoComponent,
    FooterComponent,
    Exo02Component,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
