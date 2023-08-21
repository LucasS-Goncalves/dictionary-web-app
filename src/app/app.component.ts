import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    './styles/toggle-button.css',
    './styles/header.css'
  ]
})
export class AppComponent {
  openFontOptions = false;

  openFontOptionsList(){
    this.openFontOptions = !this.openFontOptions;
  }
}
