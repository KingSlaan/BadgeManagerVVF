import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesseraModalCmpComponent } from './tessera-modal-cmp.component';

describe('TesseraModalCmpComponent', () => {
  let component: TesseraModalCmpComponent;
  let fixture: ComponentFixture<TesseraModalCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TesseraModalCmpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesseraModalCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
