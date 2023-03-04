import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilddThreeComponent } from './childd-three.component';

describe('ChilddThreeComponent', () => {
  let component: ChilddThreeComponent;
  let fixture: ComponentFixture<ChilddThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChilddThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChilddThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
