import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultMeaningComponent } from './result-meaning.component';

describe('ResultMeaningComponent', () => {
  let component: ResultMeaningComponent;
  let fixture: ComponentFixture<ResultMeaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultMeaningComponent]
    });
    fixture = TestBed.createComponent(ResultMeaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
