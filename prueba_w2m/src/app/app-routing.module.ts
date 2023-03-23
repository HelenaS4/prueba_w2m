import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHeroComponent } from './modules/add-hero/pages/add-hero/add-hero.component';
import { EditHeroComponent } from './modules/edit-hero/pages/edit-hero/edit-hero.component';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'add-hero',
    component: AddHeroComponent
  },
  {
    path: 'edit-hero',
    component: EditHeroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
