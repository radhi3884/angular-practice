import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildthirdComponent } from './childthird.component';

describe('ChildthirdComponent', () => {
  let component: ChildthirdComponent;
  let fixture: ComponentFixture<ChildthirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildthirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildthirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
