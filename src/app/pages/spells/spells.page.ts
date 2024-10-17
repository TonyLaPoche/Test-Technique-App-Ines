import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonHeader, IonSearchbar, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {HttpClient} from "@angular/common/http";
import {SpellCardComponent} from "../../components/spell-card/spell-card.component";
import {Spell} from "../../models/spell";

@Component({
  selector: 'app-spells',
  templateUrl: './spells.page.html',
  styleUrls: ['./spells.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, SpellCardComponent, IonSearchbar]
})
export class SpellsPage implements OnInit {

  // TODO : use signal
  spells: Spell[] = [];

  // TODO : use signal
  searchInput: string = '';

  // TODO : use computed signal
  protected filteredSpells: Spell[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchSpells();
  }

  fetchSpells() {
    // TODO : move in a specific service
    this.http.get<Spell[]>('https://hp-api.onrender.com/api/spells').subscribe((res: Spell[]) => {
      this.spells = res;
    })
  }

  filterSpell() {
    this.filteredSpells = this.spells.filter(spell => spell.name.toLowerCase().includes(this.searchInput.toLowerCase() || ''))
  }

}
