import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {JoinPipe} from "../../../shared/pipes/join.pipe";
import {WizardDetailsService} from "./wizard-details.service";
import {AsyncPipe, DatePipe, JsonPipe, NgOptimizedImage, TitleCasePipe} from "@angular/common";
import {toObservable} from "@angular/core/rxjs-interop";
import {switchMap} from "rxjs";
import {IonButton, IonChip, IonContent, IonIcon} from "@ionic/angular/standalone";
import {chevronBackSharp} from "ionicons/icons";
import {addIcons} from "ionicons";

@Component({
    selector: 'app-wizard-details',
    templateUrl: './wizard-details.component.html',
    styleUrls: ['./wizard-details.component.scss'],
    standalone: true,
    imports: [
        RouterLink,
        JoinPipe,
        JsonPipe,
        AsyncPipe,
        NgOptimizedImage,
        DatePipe,
        IonIcon,
        IonButton,
        IonChip,
        IonContent,
        TitleCasePipe
    ],
    changeDetection:ChangeDetectionStrategy.OnPush,
})
export class WizardDetailsComponent {
    wizardDetailsService = inject(WizardDetailsService);
    id = input.required<string>();
    wizardDetails$ = toObservable(this.id).pipe(
        switchMap((idWizard: string) => this.wizardDetailsService.getWizardDetailsById(idWizard))
    )

    isWizard(isWizard: boolean): "Wizard"|"Muggle" {
        return isWizard ? "Wizard" : "Muggle";
    }

    constructor() {
        addIcons({chevronBackSharp})
    }

}
