import {TestBed} from '@angular/core/testing';

import {SpellsService} from './spells.service';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {Spell} from "../../models/spell";
import {of} from "rxjs";

describe('SpellsService', () => {
    let service: SpellsService;
    let spellsServiceMock: jasmine.SpyObj<SpellsService>;
    let mockSpells: Spell[];
    mockSpells = [
        {
            id: "1",
            name: "tony",
            description: "description mock"
        },
        {
            id: "2",
            name: "ploup",
            description: "description mock"
        }]

    beforeEach(() => {
        spellsServiceMock = jasmine.createSpyObj('SpellsService', ['getSpells']);
        spellsServiceMock.getSpells.and.returnValue(of(mockSpells))
        TestBed.configureTestingModule({
            providers: [
                provideHttpClient(),
                provideHttpClientTesting(),
                {
                    provider: SpellsService,
                    useValue: spellsServiceMock
                }
            ]
        });
        service = TestBed.inject(SpellsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should getSpell return list of spells', () => {
        service.getSpells().subscribe((spells) => {
            expect(spells).toEqual(mockSpells)
        })
    })


});
