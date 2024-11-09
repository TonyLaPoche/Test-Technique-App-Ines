import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {WizardCardComponent} from './wizard-card.component';
import {IonicModule} from "@ionic/angular";
import {provideLocationMocks} from "@angular/common/testing";
import {ActivatedRoute, provideRouter} from "@angular/router";
import {of} from "rxjs";

describe('WizardCardComponent', () => {
    let component: WizardCardComponent;
    let fixture: ComponentFixture<WizardCardComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [WizardCardComponent, IonicModule.forRoot()],
            providers: [
                provideLocationMocks(),
                provideRouter([]),
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {params: {}},
                        paramMap: of({})
                    }
                }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(WizardCardComponent);
        fixture.componentRef.setInput('wizard', {
            id: "chuck-norris-01",
            name: "Chuck Norris",
            alternate_names: ["The Roundhouse Wizard", "The Texas Tornado", "The Beard of Power"],
            species: "human",
            gender: "male",
            house: "Gryffindor",
            dateOfBirth: "10-03-1940",
            yearOfBirth: 1940,
            wizard: true,
            ancestry: "pure-blood",
            eyeColour: "blue",
            hairColour: "brown",
            wand: {
                wood: "oak",
                core: "dragon's fear",
                length: 15, // évidemment, il a la baguette la plus longue
            },
            patronus: "grizzly bear",
            hogwartsStudent: false, // Chuck n’a pas besoin d'école, c’est l’école qui vient à lui
            hogwartsStaff: true, // Maître du self-defense contre les arts sombres
            actor: "Chuck Norris",
            alternate_actors: [], // Personne d'autre ne peut jouer Chuck Norris
            alive: true, // Chuck Norris est éternel
            image: "https://example.com/images/chuck-norris.jpg"
        })
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display the god of wizards', () => {
        expect(fixture.debugElement.nativeElement.textContent).toContain('Chuck Norris');
    })
});
