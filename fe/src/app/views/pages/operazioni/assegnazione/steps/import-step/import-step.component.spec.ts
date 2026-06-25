import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportStepComponent } from './import-step.component';

describe('AssegnazioniImportStepComponent', () => {
  let component: ImportStepComponent;
  let fixture: ComponentFixture<ImportStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
