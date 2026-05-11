import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesseraAggiungiComponent } from './tessera-aggiungi.component';

describe('TesseraAggiungiComponent', () => {
  let component: TesseraAggiungiComponent;
  let fixture: ComponentFixture<TesseraAggiungiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TesseraAggiungiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesseraAggiungiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
