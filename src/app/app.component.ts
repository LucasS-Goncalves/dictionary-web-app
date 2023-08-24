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
  darkMode: any;
  @ViewChild('darkModeIcon') darkModeIcon!: ElementRef<HTMLInputElement>;

  ngOnInit(): void {
    this.darkMode = localStorage.getItem('darkMode');
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

  openFontOptionsList(){
    this.openFontOptions = !this.openFontOptions;
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

  enableDarkMode(){
      document.body.classList.add('darkmode');

      localStorage.setItem("darkMode", "enabled")
  }

  disableDarkMode() {
    document.body.classList.remove('darkmode');

    localStorage.setItem("darkMode", "disabled");
  }
}


// let darkMode = localStorage.getItem('darkMode');

//     const enableDarkMode = () => {
//       document.body.classList.add('darkmode');

//       localStorage.setItem("darkMode", "enabled")
//     }

//     const disableDarkMode = () => {
//       document.body.classList.remove('darkmode');

//       localStorage.setItem("darkMode", "disabled");
//     }

//     if(darkMode !== 'enabled'){
//       enableDarkMode()
//     }

// if(this.darkMode !== 'enabled'){
//   this.enableDarkMode();
// }
