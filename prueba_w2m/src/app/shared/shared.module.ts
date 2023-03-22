import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { OptionsComponent } from './components/options/options.component';
import { SuperheroListComponent } from './components/superhero-list/superhero-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    OptionsComponent,
    SuperheroListComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,
    MatCardModule,
    FormsModule
  ],
  exports: [
    SuperheroListComponent,
    ToolbarComponent
  ]
})

export class SharedModule { }
