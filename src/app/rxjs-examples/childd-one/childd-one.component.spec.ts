import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilddOneComponent } from './childd-one.component';

describe('ChilddOneComponent', () => {
  let component: ChilddOneComponent;
  let fixture: ComponentFixture<ChilddOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChilddOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChilddOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
