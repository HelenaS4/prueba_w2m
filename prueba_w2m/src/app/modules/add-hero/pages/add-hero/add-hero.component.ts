import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { SuperHeroService } from 'src/app/shared/components/superhero-list/service/shared/components/superhero-list/superHero.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {
  formData: FormGroup = new FormGroup({});

  constructor(private superHeroService: SuperHeroService) {}

  ngOnInit(): void {
    this.formData = new FormGroup(
      {
        name: new FormControl('',[Validators.required])
      }
    )
  }

  submitHero(): void {
    const body = this.formData.value;
    this.superHeroService.addHero(body.name)
  }
}
