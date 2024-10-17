import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpellsPage } from './spells.page';

describe('SpellsPage', () => {
  let component: SpellsPage;
  let fixture: ComponentFixture<SpellsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
