import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeHomeComponent } from './liste-home.component';

describe('ListeHomeComponent', () => {
  let component: ListeHomeComponent;
  let fixture: ComponentFixture<ListeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
