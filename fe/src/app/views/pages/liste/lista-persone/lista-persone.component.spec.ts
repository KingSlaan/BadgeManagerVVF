import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPersoneComponent } from './lista-persone.component';
import { provideRouter } from '@angular/router';

describe('ListaPersoneComponent', () => {
  let component: ListaPersoneComponent;
  let fixture: ComponentFixture<ListaPersoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPersoneComponent],
      providers: [
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPersoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
