import { Component } from '@angular/core';

@Component({
	selector : 'my-app',
	template: '<h1>{{title}}</h1><a routerLink="/heroes">Heroes</a>   <a routerLink="/dashboard">DashBoard</a>  <router-outlet></router-outlet>'
})

export class AppComponent{
	title="欢迎来到英雄联盟之英雄峡谷";
}

