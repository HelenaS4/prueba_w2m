import { Injectable, Inject  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';

import { SuperHeroModel } from 'src/app/core/models/superhero.model';


@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  constructor(private http: HttpClient, @Inject(DOCUMENT) private document: Document) {}

  getSuperHeroData() {
    return JSON.parse(localStorage.getItem('superheroes') || '{}')
  }

  updateHero(heroId:number) {
  }

  deleteHero(heroId:number) {
    let newSuperheroesList = [];
    for (const superhero of this.getSuperHeroData()) {
      if (superhero.id != heroId) {
        newSuperheroesList.push(superhero);
      } 
    }
    localStorage.setItem('superheroes', JSON.stringify(newSuperheroesList));
  }
}
