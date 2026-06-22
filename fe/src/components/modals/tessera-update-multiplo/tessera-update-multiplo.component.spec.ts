import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesseraUpdateMultiploComponent } from './tessera-update-multiplo.component';

describe('TesseraUpdateMultiploComponent', () => {
  let component: TesseraUpdateMultiploComponent;
  let fixture: ComponentFixture<TesseraUpdateMultiploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TesseraUpdateMultiploComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesseraUpdateMultiploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
