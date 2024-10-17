import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WizardsPage } from './wizards.page';

describe('WizardsPage', () => {
  let component: WizardsPage;
  let fixture: ComponentFixture<WizardsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
