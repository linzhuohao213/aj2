import { RouterModule,RouterOutlet,Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashBoardComponent } from './dashboard.component';
import { HeroComponent } from './hero.component';
import { HeroDeatailComponent } from './hero-detail.component';

const routes : Routes = [
    {
        path:"heroes",
        component:HeroComponent
      },
      {
        path:"detail/:id",
        component:HeroDeatailComponent
      },
      {
        path:"",
        component:DashBoardComponent,
        pathMatch: 'full'
      }
];


@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule{}

