import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCrudPrracticeComponent } from './api-crud-prractice.component';

describe('ApiCrudPrracticeComponent', () => {
  let component: ApiCrudPrracticeComponent;
  let fixture: ComponentFixture<ApiCrudPrracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiCrudPrracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiCrudPrracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
