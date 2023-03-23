import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditHeroComponent } from './pages/edit-hero/edit-hero.component';

const routes: Routes = [
  {
    path: ':hero_id',
    component: EditHeroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditHeroRoutingModule { }
