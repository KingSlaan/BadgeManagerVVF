import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesseraStampaComponent } from './tessera-stampa.component';

describe('TesseraStampaComponent', () => {
  let component: TesseraStampaComponent;
  let fixture: ComponentFixture<TesseraStampaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TesseraStampaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesseraStampaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
