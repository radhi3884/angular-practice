import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFiveComponentComponent } from './child-five-component.component';

describe('ChildFiveComponentComponent', () => {
  let component: ChildFiveComponentComponent;
  let fixture: ComponentFixture<ChildFiveComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildFiveComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildFiveComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
