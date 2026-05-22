import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaQualificheComponent } from './lista-qualifiche.component';

describe('ListaQualificheComponent', () => {
  let component: ListaQualificheComponent;
  let fixture: ComponentFixture<ListaQualificheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaQualificheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaQualificheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
