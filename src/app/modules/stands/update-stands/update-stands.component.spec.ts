import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStandsComponent } from './update-stands.component';

describe('UpdateStandsComponent', () => {
  let component: UpdateStandsComponent;
  let fixture: ComponentFixture<UpdateStandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateStandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
