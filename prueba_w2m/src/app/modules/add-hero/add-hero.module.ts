import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddHeroRoutingModule } from './add-hero-routing.module';
import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddHeroComponent
  ],
  imports: [
    CommonModule,
    AddHeroRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class AddHeroModule { }
