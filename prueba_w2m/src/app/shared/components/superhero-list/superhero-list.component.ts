import { Component, OnInit, Input } from '@angular/core';
import { SuperHeroModel } from 'src/app/core/models/superhero.model';
import superHeroData from 'src/app/data/superheroes.json';

@Component({
  selector: 'app-superhero-list',
  templateUrl: './superhero-list.component.html',
  styleUrls: ['./superhero-list.component.css']
})
export class SuperheroListComponent implements OnInit {

  @Input() superHeroes: Array<SuperHeroModel> = [];

  superHeores: Array<SuperHeroModel> = []

  constructor() { }

  ngOnInit(): void {
    const { data }: any = (superHeroData as any)
    this.superHeores = data;
    console.log(this.superHeores);
  }
}
