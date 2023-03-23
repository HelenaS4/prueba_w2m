import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  redirectHome() {
    window.location.href = '';
  }

  redirectAddSuperhero() {
    window.location.href = 'add-hero'
  }
}
