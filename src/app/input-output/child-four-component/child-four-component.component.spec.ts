import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFourComponentComponent } from './child-four-component.component';

describe('ChildFourComponentComponent', () => {
  let component: ChildFourComponentComponent;
  let fixture: ComponentFixture<ChildFourComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildFourComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildFourComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
