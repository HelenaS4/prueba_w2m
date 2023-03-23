import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { SuperHeroService } from 'src/app/shared/components/superhero-list/service/shared/components/superhero-list/superHero.service';
import { ActivatedRoute } from '@angular/router';
import { SuperHeroModel } from 'src/app/core/models/superhero.model';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent {
  superHeroes: Array<SuperHeroModel> = JSON.parse(localStorage.getItem('superheroes') || "{}")
  formData: FormGroup = new FormGroup({});
  urlParams: any;
  superhero:SuperHeroModel = { id: -1, name: ''};

  constructor(
    private superHeroService: SuperHeroService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(
      params => {
        this.urlParams = params;
      }
    )

    let heroId = this.urlParams.params.heroId;

    for (const superhero of this.superHeroes) {
      if (heroId == superhero.id) {
        this.superhero = superhero
      }
    }
    
    this.formData = new FormGroup(
      {
        name: new FormControl(this.superhero.name,[Validators.required])
      }
    )
  }

  updateHero(): void {
    const body = this.formData.value;
    this.superHeroService.updateHero(body.name)
    window.location.href = "/"
  }

}
