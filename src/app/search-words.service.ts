import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeachWords{

  constructor(private http: HttpClient){}

  searchWord(word: string){
    return this.http.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
  }
}
