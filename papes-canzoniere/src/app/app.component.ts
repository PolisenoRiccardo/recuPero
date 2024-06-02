import { Component } from '@angular/core';
import { Song } from './song.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  canzone !: Song;

  constructor() {}

  aggiungiCanzone(nuovoTitolo: HTMLInputElement, nuovaDurata: HTMLInputElement, nuovaData: HTMLInputElement):boolean {
    console.log(nuovoTitolo.value, nuovaDurata.value, nuovaData.value)
    
    this.canzone = new Song(nuovaData.value, nuovaDurata.value, nuovoTitolo.value)
    return false
  }
}


