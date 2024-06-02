import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  aggiungiCanzone(nuovoTitolo: HTMLInputElement, nuovaDurata: HTMLInputElement, nuovaData: HTMLInputElement):boolean {
    console.log(nuovoTitolo.value, nuovaDurata.value, nuovaData.value)
    return false
  }
}
