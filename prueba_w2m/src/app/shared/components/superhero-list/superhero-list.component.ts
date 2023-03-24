import { Component, OnInit} from '@angular/core';
import { SuperHeroModel } from 'src/app/core/models/superhero.model';
import { SuperHeroService } from './service/shared/components/superhero-list/superHero.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-superhero-list',
  templateUrl: './superhero-list.component.html',
  styleUrls: ['./superhero-list.component.css']
})
export class SuperheroListComponent implements OnInit {

  filter:string = '';

  superHeores: Array<SuperHeroModel> = [];

  constructor(
    private superHeroService: SuperHeroService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadSuperHeroes();
  }

  loadSuperHeroes() {
    this.superHeores = this.superHeroService.getSuperHeroData();
  }

  heroSearch(term:string): void {
    this.loadSuperHeroes();
    let filtered_heroes = [];
    if (term !== '') {
      for (const superhero of this.superHeores) {
        if (!isNaN(Number(term))) {
          if (superhero.id == Number(term)) {
            filtered_heroes.push(superhero);
          }
        }
        else if(superhero.name.includes(term)) {
          filtered_heroes.push(superhero);
        }
      }
      this.superHeores = filtered_heroes;
    }
    this.filter = '';
  }

  onDelete(hero:SuperHeroModel) {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '50%',
      data: {
        id: hero.id,
        name: hero.name
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      window.location.href = '/'
    });
  }

  redirectEditHero(hero:SuperHeroModel) {
    window.location.href = 'edit-hero?heroId='+hero.id
  }
}
