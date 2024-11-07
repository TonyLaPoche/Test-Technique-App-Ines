import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {SpellCardComponent} from './spell-card.component';

describe('SpellCardComponent', () => {
    let component: SpellCardComponent;
    let fixture: ComponentFixture<SpellCardComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [SpellCardComponent, IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(SpellCardComponent);
        fixture.componentRef.setInput('spell', {id: '1', name: 'Faker', description: 'Faker description'});
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display the faker spell', () => {
        expect(fixture.debugElement.nativeElement.textContent.includes("Faker")).toBeTruthy();
    });
});
