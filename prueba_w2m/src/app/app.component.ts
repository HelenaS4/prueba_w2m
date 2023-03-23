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
    if (!localStorage.getItem('superheroes')) {
      const { data }: any = (superHeroData as any);
      localStorage.setItem('superheroes', JSON.stringify(data));
    }
  }
}
