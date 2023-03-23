import { Component } from '@angular/core';
import superHeroData from 'src/app/data/superheroes.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    const { data }: any = (superHeroData as any);
    localStorage.setItem('superheroes', JSON.stringify(data));
    console.log('FIRST LIST', JSON.parse(localStorage.getItem('superheroes') || '{}'));
  }
}
