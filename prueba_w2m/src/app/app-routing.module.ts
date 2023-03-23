import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditHeroComponent } from './modules/edit-hero/pages/edit-hero/edit-hero.component';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
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
