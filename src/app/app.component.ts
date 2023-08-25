import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'

import { SeachWords } from './search-words.service';

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

  wordChosen = {
    word: ''
  };

  searchWordInput!: FormGroup;
  fontFamily!: string | null;
  openFontOptions = false;
  darkModeActive = false;
  darkMode = localStorage.getItem('darkMode');
  @ViewChild('darkModeIcon') darkModeIcon!: ElementRef<HTMLInputElement>;

  constructor(private searchWords: SeachWords){}

  ngOnInit(): void {

    this.searchWordInput = new FormGroup({
      word: new FormControl(null, Validators.required)
    });

    if(this.darkMode == "dark"){
      this.darkModeActive = true;
      document.documentElement.setAttribute('data-theme', "dark");
    }

    this.fontFamily = localStorage.getItem('data-fontFamily');

    if(this.fontFamily){
      document.documentElement.setAttribute('data-fontFamily', `${this.fontFamily}`);
    }
  }

  ngAfterViewInit(): void {
    if(this.darkMode == "dark"){
      this.darkModeIcon.nativeElement.checked = true;
    }
  }

  switchFontFamily(fontName: string){
    document.documentElement.setAttribute('data-fontFamily', `${fontName}`);
    localStorage.setItem('data-fontFamily', `${fontName}`);
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

  getWord(){
    const word = this.searchWordInput.get('word')?.value;
    this.wordChosen.word = word;
    this.searchWords.searchWord(word).subscribe(console.log);
  }
}
