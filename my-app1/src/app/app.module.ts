import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero.component';
import { HeroDeatailComponent } from './hero-detail.component';
import { DashBoardComponent } from './dashboard.component';
import { HeroService } from './hero.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroDeatailComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:"heroes",
        component:HeroComponent
      },
      {
        path:"",
        component:DashBoardComponent,
        pathMatch: 'full'
      }
    ])
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})



export class AppModule { }
