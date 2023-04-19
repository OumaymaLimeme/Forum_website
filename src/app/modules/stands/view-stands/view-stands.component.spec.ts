import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStandsComponent } from './view-stands.component';

describe('ViewStandsComponent', () => {
  let component: ViewStandsComponent;
  let fixture: ComponentFixture<ViewStandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewStandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
