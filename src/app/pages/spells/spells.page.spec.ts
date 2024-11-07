import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SpellsPage} from './spells.page';
import {SpellsService} from "./spells.service";
import {Spell} from "../../models/spell";
import {of} from "rxjs";
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('SpellsPage', () => {
    let component: SpellsPage;
    let fixture: ComponentFixture<SpellsPage>;
    let spellsServiceMock: jasmine.SpyObj<SpellsService>;
    let mockSpell: Spell[] = [
        {
            id: "1",
            name: "tony",
            description: "description mock"
        },
        {
            id: "2",
            name: "ploup",
            description: "description mock"
        }
    ]

    beforeEach(async () => {
        spellsServiceMock = jasmine.createSpyObj('SpellsService', ['getSpells']);
        spellsServiceMock.getSpells.and.returnValue(of(mockSpell));

        await TestBed.configureTestingModule({
            imports: [SpellsPage],
            providers: [
                provideHttpClient(),
                provideHttpClientTesting(),
                {
                    provide: SpellsService,
                    useValue: spellsServiceMock
                },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(SpellsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display all spells', () => {
        const spellCards = fixture.debugElement.nativeElement.querySelectorAll('app-spell-card');
        expect(fixture.componentInstance.filteredSpells().length).toBe(2);
        expect(spellCards.length).toBe(2);
    })

});
