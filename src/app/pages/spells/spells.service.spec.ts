import {TestBed} from '@angular/core/testing';

import {SpellsService} from './spells.service';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('SpellsService', () => {
    let service: SpellsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideHttpClient(),
                provideHttpClientTesting(),
            ]
        });
        service = TestBed.inject(SpellsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
