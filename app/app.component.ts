import {Component} from 'angular2/core';

interface hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template:`
  <h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div><input [(ngModel)]="hero.name" placeholder="name" /></div>
  `
})

export class AppComponent {
  public title = "Angular2 Typescript Dashboard";
  public hero: Hero = {
    id: 1,
    name: "Windstorm"
  };
}
