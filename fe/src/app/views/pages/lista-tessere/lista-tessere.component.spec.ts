import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTessereComponent } from './lista-tessere.component';

describe('ListaTessereComponent', () => {
  let component: ListaTessereComponent;
  let fixture: ComponentFixture<ListaTessereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTessereComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTessereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
