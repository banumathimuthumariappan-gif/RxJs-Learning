import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableExerciseComponent } from './observable-exercise.component';

describe('ObservableExerciseComponent', () => {
  let component: ObservableExerciseComponent;
  let fixture: ComponentFixture<ObservableExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableExerciseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
