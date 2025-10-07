import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterUnsubscriptionExampleComponent } from './counter-unsubscription-example.component';

describe('CounterUnsubscriptionExampleComponent', () => {
  let component: CounterUnsubscriptionExampleComponent;
  let fixture: ComponentFixture<CounterUnsubscriptionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterUnsubscriptionExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterUnsubscriptionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
