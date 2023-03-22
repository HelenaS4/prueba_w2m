import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SuperHeroModel } from 'src/app/core/models/superhero.model';
import superHeroData from 'src/app/data/superheroes.json';

@Component({
  selector: 'app-superhero-list',
  templateUrl: './superhero-list.component.html',
  styleUrls: ['./superhero-list.component.css']
})
export class SuperheroListComponent implements OnInit {

  filter:string = ''

  superHeores: Array<SuperHeroModel> = []

  constructor() { }

  ngOnInit(): void {
    const { data }: any = (superHeroData as any)
    this.superHeores = data;
    this.heroSearch(this.filter);
  }

  heroSearch(term:string): void {
    if (term !== '') {
      console.log(term)
      let filtered_heroes = [];
      for (const superhero of this.superHeores) {
        if(superhero.name.includes(term)) {
          filtered_heroes.push(superhero);
        }
      }
      this.superHeores = filtered_heroes;
    }
  }

}
