import { Http,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class HeroService {
	private httpUrl="api/heroes";
	private headers = new Headers({'Content-Type': 'application/json'});
	constructor(private http:Http){}
	getHeros():Promise<Hero[]>{
		return this.http.get(this.httpUrl)
			.toPromise()
			.then(response=>response.json().data as Hero[])
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
	    console.error('An error occurred', error); // for demo purposes only
	    return Promise.reject(error.message || error);
	}

	getHero(id:number):Promise<Hero>{
		const url = this.httpUrl+"/"+id;
		return this.http.get(url).toPromise()
					.then(response=>response.json().data as Hero)
					.catch(this.handleError);
	}

	updateHero(hero:Hero):Promise<Hero>{
		const url = this.httpUrl+"/"+hero.id;
		return this.http.put(url,JSON.stringify(hero),{headers: this.headers}).toPromise()
					.then(()=>hero)
					.catch(this.handleError);

	}
}