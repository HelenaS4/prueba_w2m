import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHeroComponent } from './pages/add-hero/add-hero.component';

const routes: Routes = [
  {
    path: 'add-hero',
    component: AddHeroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddHeroRoutingModule { }
