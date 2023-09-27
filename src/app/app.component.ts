import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { SeachWords } from './search-words.service';
import { catchError, skip, take, throwError } from 'rxjs';

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
    './styles/source-section.css',
    './styles/error-container.css',
    './styles/loading-spinner.css'
  ]
})
export class AppComponent implements OnInit, AfterViewInit{

  displayError = false;
  displayWordInfo = false;
  displayLoadingSpinner = false;
  displayAudioError = false;

  openFontOptions = false;
  darkModeActive = false;

  isFormValid = true;

  wordChosen: any = [];
  searchWordForm!: FormGroup;

  fontFamily = localStorage.getItem('data-fontFamily');
  darkMode = localStorage.getItem('darkMode');

  @ViewChild('audio') audio!: ElementRef<HTMLAudioElement>;
  @ViewChild('darkModeIcon') darkModeIcon!: ElementRef<HTMLInputElement>;

  constructor(private searchWords: SeachWords, private router: Router, private route: ActivatedRoute ){}

  ngOnInit(): void {
    if(this.darkMode == "dark"){
      this.darkModeActive = true;
      document.documentElement.setAttribute('data-theme', "dark");
    }

    if(this.fontFamily){
      document.documentElement.setAttribute('data-fontFamily', `${this.fontFamily}`);
    } else {
      this.fontFamily = 'Inconsolata';
    }

    this.searchWordForm = new FormGroup({
      word: new FormControl(null, Validators.required)
    });

    this.route.queryParams.pipe(take(2), skip(1)).subscribe((word:any) => {
      if(word.hasOwnProperty('word')){
        this.searchWordForm.get('word')?.patchValue(word.word);
        this.getWordInfoFromAPI();
      }
    });
  }

  ngAfterViewInit(): void {
    if(this.darkMode === "dark"){
      this.darkModeIcon.nativeElement.checked = true;
    }
  }

  switchFontFamily(fontName: string){
    localStorage.setItem('data-fontFamily', `${fontName}`);
    document.documentElement.setAttribute('data-fontFamily', `${fontName}`);
    this.fontFamily = fontName;
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

  defineQueryParams(){
    this.router.navigate([''], { queryParams: { word: this.searchWordForm.get('word')?.value } });
  }

  invalidForm(){
    this.isFormValid = false;
  }

  getWordInfoFromAPI(){
    this.isFormValid = true;
    this.displayLoadingSpinner = true;
    this.displayWordInfo = false;
    this.displayError = false;
    this.searchWords.searchWord(this.searchWordForm.get('word')?.value).subscribe(
      {
        next: (word:any) => {
          if(word){
            this.displayLoadingSpinner = false;
            this.displayWordInfo = true;
            this.wordChosen = [];
            this.wordChosen.push(...[word[0]]);
            this.wordChosen[0].phonetics = this.wordChosen[0].phonetics.find((audio: any) => audio.audio !== '');

          }
        },
        error: (e) => {
          this.displayLoadingSpinner = false;
          this.displayWordInfo = false;
          this.displayError = true;
        }
      }
    );
  }

  setWordInfo(){
    this.defineQueryParams();
    this.getWordInfoFromAPI();
  }

  playSound(){
    if(!this.wordChosen[0].phonetics) {
      this.displayAudioError = true;
      setTimeout(() => {
        this.displayAudioError = false;
      }, 3000)
    };
    this.audio.nativeElement.play();

  }

  resetPage(){
    this.router.navigate([], {
      queryParams: {
        word: null
      }
    });

    this.searchWordForm.get('word')?.reset();
    this.isFormValid = true;
    this.displayWordInfo = false;
    this.displayError = false;
    this.displayLoadingSpinner = false;
  }
}

