import { Component } from '@angular/core';

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
export class AppComponent {
  openFontOptions = false;
  darkModeActive = false;
  darkMode = localStorage.getItem('darkMode');

  openFontOptionsList(){
    this.openFontOptions = !this.openFontOptions;
  }

  darkModeToggle(){
    this.darkModeActive = !this.darkModeActive;
    console.log(this.darkModeActive)
    document.documentElement.setAttribute('data-theme', this.darkModeActive ? "dark" : "light");
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
