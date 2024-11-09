import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {Wizard} from "../../models/wizard";
import {JoinPipe} from "../../shared/pipes/join.pipe";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-wizard-card',
    templateUrl: './wizard-card.component.html',
    styles: `
      :host {
        display: block;
      }
    `,
    standalone: true,
    imports: [
        RouterLink,
        JoinPipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WizardCardComponent {
    wizard = input.required<Wizard>()
}
