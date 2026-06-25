import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssegnazioneCompletataComponent } from './assegnazione-completata.component';

describe('AssegnazioneCompletetaComponent', () => {
  let component: AssegnazioneCompletataComponent;
  let fixture: ComponentFixture<AssegnazioneCompletataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssegnazioneCompletataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssegnazioneCompletataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
