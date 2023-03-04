import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilddTwoComponent } from './childd-two.component';

describe('ChilddTwoComponent', () => {
  let component: ChilddTwoComponent;
  let fixture: ComponentFixture<ChilddTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChilddTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChilddTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
