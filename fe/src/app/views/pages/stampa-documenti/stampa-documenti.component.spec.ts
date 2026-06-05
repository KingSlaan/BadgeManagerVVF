import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StampaDocumentiComponent } from './stampa-documenti.component';

describe('StampaDocumentiComponent', () => {
  let component: StampaDocumentiComponent;
  let fixture: ComponentFixture<StampaDocumentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StampaDocumentiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StampaDocumentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
