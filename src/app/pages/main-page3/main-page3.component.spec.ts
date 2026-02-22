import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPage3Component } from './main-page3.component';

describe('MainPage3Component', () => {
  let component: MainPage3Component;
  let fixture: ComponentFixture<MainPage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPage3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
