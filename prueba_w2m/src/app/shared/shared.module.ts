import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SuperheroListComponent } from './components/superhero-list/superhero-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog'; 
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
    SuperheroListComponent,
    ToolbarComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    FormsModule
  ],
  exports: [
    SuperheroListComponent,
    ToolbarComponent
  ]
})

export class SharedModule { }
