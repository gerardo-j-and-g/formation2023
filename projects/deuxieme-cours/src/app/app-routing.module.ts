import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo01Component } from './components/demos/demo01/demo01.component';
import { Demo02Component } from './components/demos/demo02/demo02.component';
import { Demo03Component } from './components/demos/demo03/demo03.component';
import { HomeComponent } from './components/home/home.component';
import { Exo03Component } from './exercices/exo03/exo03.component';
import { Exo07Component } from './exercices/exo07/exo07.component';
import { Exo09Component } from './exercices/exo09/exo09.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'demo',
    children: [
      {
        path: '01',
        component: Demo01Component,
      },
      {
        path: '02',
        component: Demo02Component,
      },
      {
        path: '03',
        component: Demo03Component,
      },
    ],
  },
  {
    path: 'exo',
    children: [
      {
        path: '03',
        component: Exo03Component,
      },
      {
        path: '07',
        component: Exo07Component,
      },
      {
        path: '09',
        component: Exo09Component,
      },
    ],
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
