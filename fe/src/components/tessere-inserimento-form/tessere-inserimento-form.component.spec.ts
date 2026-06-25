import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TessereInserimentoFormComponent } from './tessere-inserimento-form.component';

describe('TessereInserimentoFormComponent', () => {
  let component: TessereInserimentoFormComponent;
  let fixture: ComponentFixture<TessereInserimentoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TessereInserimentoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TessereInserimentoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
