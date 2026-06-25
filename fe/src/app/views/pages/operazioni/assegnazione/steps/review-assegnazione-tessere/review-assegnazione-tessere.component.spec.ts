import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewAssegnazioneTessereComponent } from './review-assegnazione-tessere.component';

describe('ReviewAssegnazioneTessereComponent', () => {
  let component: ReviewAssegnazioneTessereComponent;
  let fixture: ComponentFixture<ReviewAssegnazioneTessereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewAssegnazioneTessereComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewAssegnazioneTessereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
