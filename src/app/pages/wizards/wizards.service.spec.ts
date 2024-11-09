import {TestBed} from '@angular/core/testing';

import {WizardsService} from './wizards.service';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {Wizard} from "../../models/wizard";
import {of} from "rxjs";

describe('WizardsService', () => {
    let service: WizardsService;
    let wizardServiceMock: jasmine.SpyObj<WizardsService>;
    let mockWizards: Wizard[];
    mockWizards = [
        {
            id: "1234abcd",
            name: "Harry Potter",
            alternate_names: ["The Boy Who Lived", "Chosen One"],
            species: "human",
            gender: "male",
            house: "Gryffindor",
            dateOfBirth: "31-07-1980",
            yearOfBirth: 1980,
            wizard: true,
            ancestry: "half-blood",
            eyeColour: "green",
            hairColour: "black",
            wand: {
                wood: "holly",
                core: "phoenix feather",
                length: 11,
            },
            patronus: "stag",
            hogwartsStudent: true,
            hogwartsStaff: false,
            actor: "Daniel Radcliffe",
            alternate_actors: ["John Doe"], // Remplacez par des noms fictifs pour des doublures, par exemple
            alive: true,
            image: "https://example.com/images/harry-potter.jpg"
        },
        {
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
        }
    ];
    beforeEach(() => {
        wizardServiceMock = jasmine.createSpyObj('WizardsService', ['getCharacters']);
        wizardServiceMock.getCharacters.and.returnValue(of(mockWizards))
        TestBed.configureTestingModule({
            providers: [
                provideHttpClient(),
                provideHttpClientTesting(),
                {provide: WizardsService, useValue: wizardServiceMock}
            ]
        });
        service = TestBed.inject(WizardsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should fetch wizard list', () => {
        service.getCharacters().subscribe((data) => {
            expect(data).toEqual(mockWizards)
        })
    })
});
