import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exo01Component } from './exercices/exo01/exo01.component';
import { FooterComponent } from './exercices/exo01/footer/footer.component';
import { Exo02Component } from './exercices/exo02/exo02.component';

const routes: Routes = [
  {
    path: 'exo-01',
    component: Exo01Component,
    children: [{ path: 'home', component: FooterComponent }],
  },
  { path: 'exo-02', component: Exo02Component },
  { path: '**', redirectTo: 'exo-01' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
