import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    './styles/toggle-button.css',
    './styles/header.css',
    './styles/form.css',
    './styles/word-phonetics-section.css',
    './styles/part-of-speech-section.css',
    './styles/source-section.css'
  ]
})
export class AppComponent implements OnInit, AfterViewInit{

  openFontOptions = false;
  darkModeActive = false;
  darkMode = localStorage.getItem('darkMode');
  @ViewChild('darkModeIcon') darkModeIcon!: ElementRef<HTMLInputElement>;

  ngOnInit(): void {
    if(this.darkMode == "dark"){
      this.darkModeActive = true;
      document.documentElement.setAttribute('data-theme', "dark");
    }
  }

  ngAfterViewInit(): void {
    if(this.darkMode == "dark"){
      this.darkModeIcon.nativeElement.checked = true;
    }
  }


  darkModeToggle(){
    this.darkModeActive = !this.darkModeActive;

    if(this.darkModeActive){
      document.documentElement.setAttribute('data-theme', "dark");
      localStorage.setItem('darkMode', "dark");
    } else {
      document.documentElement.setAttribute('data-theme', "light");
      localStorage.setItem('darkMode', "light");
    }
  }

  openFontOptionsList(){
    this.openFontOptions = !this.openFontOptions;
  }
}
