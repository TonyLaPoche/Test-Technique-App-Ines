import {Component, input} from '@angular/core';
import {Spell} from "../../models/spell";

@Component({
    selector: 'app-spell-card',
    templateUrl: './spell-card.component.html',
    styles: `
      :host {
        display: block;
      }
    `,
    standalone: true
})
export class SpellCardComponent {
    spell = input.required<Spell>();
}