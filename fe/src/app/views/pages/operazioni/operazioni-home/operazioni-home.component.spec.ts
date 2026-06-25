import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperazioniHomeComponent } from './operazioni-home.component';
import { provideRouter } from '@angular/router';

describe('OperazioniHomeComponent', () => {
  let component: OperazioniHomeComponent;
  let fixture: ComponentFixture<OperazioniHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperazioniHomeComponent],
      providers: [
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperazioniHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
