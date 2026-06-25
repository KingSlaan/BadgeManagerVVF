import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewImportRowsComponent } from './review-import-rows.component';

describe('ReviewImportRowsComponent', () => {
  let component: ReviewImportRowsComponent;
  let fixture: ComponentFixture<ReviewImportRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewImportRowsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewImportRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
