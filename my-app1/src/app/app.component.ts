import { Component,OnInit } from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HeroService]
})

export class AppComponent implements OnInit {
  constructor(private heroService:HeroService){

  }
  ngOnInit(): void {
    this.getHeros();
  }
  title = '欢迎召唤师来到英雄峡谷';
  heroes: Hero[];
  selectedHero: Hero;
  selectHero(hero:Hero):void{
  	 this.selectedHero = hero;
  }
  getHeros():void{
    this.heroService.getHeros().then(heros=>this.heroes=heros);
  }

}


