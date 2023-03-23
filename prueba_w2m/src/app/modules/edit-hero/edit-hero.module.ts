import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditHeroRoutingModule } from './edit-hero-routing.module';
import { EditHeroComponent } from './pages/edit-hero/edit-hero.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditHeroComponent
  ],
  imports: [
    CommonModule,
    EditHeroRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class EditHeroModule { }
