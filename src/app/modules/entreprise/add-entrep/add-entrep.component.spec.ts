import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEntrepComponent } from './add-entrep.component';

describe('AddEntrepComponent', () => {
  let component: AddEntrepComponent;
  let fixture: ComponentFixture<AddEntrepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEntrepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEntrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
