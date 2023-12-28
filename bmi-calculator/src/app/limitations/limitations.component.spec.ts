import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitationsComponent } from './limitations.component';

describe('LimitationsComponent', () => {
  let component: LimitationsComponent;
  let fixture: ComponentFixture<LimitationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LimitationsComponent]
    });
    fixture = TestBed.createComponent(LimitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
