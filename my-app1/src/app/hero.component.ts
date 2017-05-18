import {  Router } from '@angular/router';

import { Component,OnInit } from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';


@Component({
  selector: 'my-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {
  constructor(private heroService:HeroService,private router:Router){

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
  gotoDetail():void{
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}


