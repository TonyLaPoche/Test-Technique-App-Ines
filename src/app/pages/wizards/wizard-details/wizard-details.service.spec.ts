import {TestBed} from '@angular/core/testing';
import {WizardDetailsService} from './wizard-details.service';
import {Wizard} from '../../../models/wizard';
import {of} from "rxjs";
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('WizardDetailsService', () => {
    let service: WizardDetailsService;
    let wizardDetailsServiceMock: jasmine.SpyObj<WizardDetailsService>;

    const mockWizard: Wizard = {
        id: "wizard-id-01",
        name: "Albus Dumbledore",
        alternate_names: ["The Headmaster", "The Elder"],
        species: "human",
        gender: "male",
        house: "Gryffindor",
        dateOfBirth: "1881-08-31",
        yearOfBirth: 1881,
        wizard: true,
        ancestry: "half-blood",
        eyeColour: "blue",
        hairColour: "silver",
        wand: {
            wood: "elder",
            core: "thestral tail hair",
            length: 15,
        },
        patronus: "phoenix",
        hogwartsStudent: false,
        hogwartsStaff: true,
        actor: "Michael Gambon",
        alternate_actors: ["Jude Law"],
        alive: false,
        image: "https://example.com/images/dumbledore.jpg"
    };

    beforeEach(() => {
        wizardDetailsServiceMock = jasmine.createSpyObj('WizardDetailsService', ['getWizardDetailsById']);
        wizardDetailsServiceMock.getWizardDetailsById.and.returnValue(of([mockWizard]));
        TestBed.configureTestingModule({
            providers: [
                provideHttpClient(),
                provideHttpClientTesting(),
                {provide: WizardDetailsService, useValue: wizardDetailsServiceMock}
            ]
        });
        service = TestBed.inject(WizardDetailsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should fetch wizard details by id', () => {
        const wizardId = "wizard-id-01";

        service.getWizardDetailsById(wizardId).subscribe((data) => {
            expect(data).toEqual([mockWizard]);
        });

        expect(wizardDetailsServiceMock.getWizardDetailsById).toHaveBeenCalledWith(wizardId);
    });
});
