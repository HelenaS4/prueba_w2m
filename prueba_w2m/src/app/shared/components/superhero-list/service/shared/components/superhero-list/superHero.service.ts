import { Injectable, Inject  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { SuperHeroModel } from 'src/app/core/models/superhero.model';


@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  superheroes:any = JSON.parse(localStorage.getItem('superheroes') ||'{}');

  constructor(private http: HttpClient, @Inject(DOCUMENT) private document: Document) {}

  getSuperHeroData() {
    return JSON.parse(localStorage.getItem('superheroes') || '{}')
  }

  addHero(heroName:string) {
    let lastIndex = this.superheroes.length - 1;
    let lastSuperHero = this.superheroes[lastIndex];

    let newSuperHero:SuperHeroModel = {
      id: lastSuperHero.id +1,
      name: heroName
    }

    this.superheroes.push(newSuperHero);
    localStorage.setItem('superheroes', JSON.stringify(this.superheroes));
  }

  updateHero(superheroFormData:SuperHeroModel) {

    let updatedSuperheroes = [];

    for (const superhero of this.superheroes) {
      if (superheroFormData.id == superhero.id) {
        superhero.name = superheroFormData.name;
      }
      updatedSuperheroes.push(superhero);
    }
    localStorage.setItem('superheroes', JSON.stringify(updatedSuperheroes));
    window.location.href = '/';
  } 

  deleteHero(heroId:number) {
    let newSuperheroesList = [];
    for (const superhero of this.superheroes) {
      if (superhero.id != heroId) {
        newSuperheroesList.push(superhero);
      } 
    }
    localStorage.setItem('superheroes', JSON.stringify(newSuperheroesList));
  }
}
