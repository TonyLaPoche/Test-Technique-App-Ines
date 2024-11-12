import {ChangeDetectionStrategy, Component, computed, inject, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonSearchbar,
    IonSpinner,
    IonTitle,
    IonToolbar
} from '@ionic/angular/standalone';
import {SpellCardComponent} from "../../components/spell-card/spell-card.component";
import {SpellsService} from "./spells.service";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
    selector: 'app-spells',
    templateUrl: './spells.page.html',
    styleUrls: ['./spells.page.scss'],
    standalone: true,
    imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, SpellCardComponent, IonSearchbar, IonItem, IonLabel, IonSpinner],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpellsPage {
    spellsService = inject(SpellsService);

    spells = toSignal(this.spellsService.getSpells());
    searchInput = signal<string>('');
    filteredSpells = computed(() => this.spells()?.filter(spell => spell.name.toLowerCase().includes(this.searchInput().toLowerCase())) ?? []);

}
