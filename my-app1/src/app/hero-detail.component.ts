import {Component,Input,OnInit} from '@angular/core';
import {Hero} from './hero';
import { ActivatedRoute,Params } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';



@Component({
	"selector":"hero-detail",
	"templateUrl":"hero-detail.component.html",
	styleUrls:["hero-detail.component.css"]
})

export class HeroDeatailComponent implements OnInit{
	hero:Hero;
	constructor(private heroService:HeroService,private router:ActivatedRoute,private location:Location){}

	ngOnInit():void{
		this.router.params
			.switchMap((params:Params)=>this.heroService.getHero(+params['id']))
			.subscribe(hero=>this.hero = hero);
	}
	
	goBack():void{
		this.location.back();
	}

	update():void{
		this.heroService.updateHero(this.hero)
			.then(()=>this.goBack());
	}

}