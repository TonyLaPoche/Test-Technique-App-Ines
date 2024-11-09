import {ChangeDetectionStrategy, Component, computed, inject, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonContent, IonHeader, IonSearchbar, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {WizardsService} from "./wizards.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {SpellCardComponent} from "../../components/spell-card/spell-card.component";
import {WizardCardComponent} from "../../components/wizard-card/wizard-card.component";

@Component({
    selector: 'app-wizards',
    templateUrl: './wizards.page.html',
    styleUrls: ['./wizards.page.scss'],
    standalone: true,
    imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSearchbar, SpellCardComponent, WizardCardComponent],
    changeDetection:ChangeDetectionStrategy.OnPush,
})
export class WizardsPage {
    wizardsServices = inject(WizardsService);
    wizards = toSignal(this.wizardsServices.getCharacters());
    searchInput = signal<string>('');
    filteredWizards = computed(() => this.wizards()?.filter(wizard => wizard.name.toLowerCase().includes(this.searchInput().toLowerCase())) ?? [])
}
