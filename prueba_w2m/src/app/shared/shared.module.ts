import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { OptionsComponent } from './components/options/options.component';
import { SuperheroListComponent } from './components/superhero-list/superhero-list.component';



@NgModule({
  declarations: [
    OptionsComponent,
    SuperheroListComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SuperheroListComponent,
    ToolbarComponent
  ]
})

export class SharedModule { }
