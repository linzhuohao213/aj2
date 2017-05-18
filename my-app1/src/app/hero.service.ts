import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROS } from './mock-heroes';


@Injectable()
export class HeroService {
	getHeros():Promise<Hero[]>{
		return Promise.resolve(HEROS);
	}

	getHerosSlow():Promise<Hero[]>{
		return new Promise(resolve => {
		    // Simulate server latency with 2 second delay
		    setTimeout(() => resolve(this.getHeros()), 2000);
		});
	}

	getHero(id:number):Promise<Hero>{
		return Promise.resolve(HEROS.find(hero=>hero.id===id));
	}
}