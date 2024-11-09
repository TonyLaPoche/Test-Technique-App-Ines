import {ComponentFixture, TestBed} from '@angular/core/testing';
import {WizardDetailsComponent} from './wizard-details.component';
import {WizardDetailsService} from './wizard-details.service';
import {of} from 'rxjs';

describe('WizardDetailsComponent', () => {
    let component: WizardDetailsComponent;
    let fixture: ComponentFixture<WizardDetailsComponent>;
    let wizardDetailsServiceMock: jasmine.SpyObj<WizardDetailsService>;

    const mockWizardDetails = [{
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
    }];

    beforeEach(async () => {
        wizardDetailsServiceMock = jasmine.createSpyObj('WizardDetailsService', ['getWizardDetailsById']);
        wizardDetailsServiceMock.getWizardDetailsById.and.returnValue(of(mockWizardDetails));

        await TestBed.configureTestingModule({
            imports: [WizardDetailsComponent],
            providers: [
                {
                    provide: WizardDetailsService,
                    useValue: wizardDetailsServiceMock
                }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(WizardDetailsComponent);
        fixture.componentRef.setInput('id', 'chuck-norris-01')
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should return "Wizard" or "Muggle" based on isWizard', () => {
        expect(component.isWizard(true)).toBe("Wizard");
        expect(component.isWizard(false)).toBe("Muggle");
    });

    it('should call getWizardDetailsById with the correct id', () => {
        expect(wizardDetailsServiceMock.getWizardDetailsById).toHaveBeenCalledWith("chuck-norris-01");
    });

    it('should emit wizard details from wizardDetails$', (done) => {
        component.wizardDetails$.subscribe((wizardDetails) => {
            expect(wizardDetails).toEqual(mockWizardDetails);
            done();
        });
    });
});
