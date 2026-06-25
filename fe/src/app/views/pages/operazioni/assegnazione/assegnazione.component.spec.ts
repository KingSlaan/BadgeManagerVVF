import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssegnazioneComponent } from './assegnazione.component';

describe('AssegnazioneComponent', () => {
  let component: AssegnazioneComponent;
  let fixture: ComponentFixture<AssegnazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssegnazioneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssegnazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
