import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationFunctionsComponent } from './creation-functions.component';

describe('CreationFunctionsComponent', () => {
  let component: CreationFunctionsComponent;
  let fixture: ComponentFixture<CreationFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationFunctionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
