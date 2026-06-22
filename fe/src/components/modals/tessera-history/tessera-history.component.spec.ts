import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesseraHistoryComponent } from './tessera-history.component';

describe('TesseraHistoryComponent', () => {
  let component: TesseraHistoryComponent;
  let fixture: ComponentFixture<TesseraHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TesseraHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesseraHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
