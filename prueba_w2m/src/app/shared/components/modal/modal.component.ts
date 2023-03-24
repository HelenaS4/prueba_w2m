import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SuperHeroModel } from 'src/app/core/models/superhero.model';
import { SuperHeroService } from '../superhero-list/service/shared/components/superhero-list/superHero.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public hero: SuperHeroModel,
    private superheroService: SuperHeroService
    ) {}

    onDeleteHero(hero:SuperHeroModel) {
      this.superheroService.deleteHero(hero.id);
    }

    onNoClick(): void {
      this.dialogRef.close();
    }
}
