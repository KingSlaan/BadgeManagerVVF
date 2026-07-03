import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStatisticheWidgetComponent } from './home-statistiche-widget.component';

describe('HomeStatisticheWidgetComponent', () => {
  let component: HomeStatisticheWidgetComponent;
  let fixture: ComponentFixture<HomeStatisticheWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeStatisticheWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeStatisticheWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
