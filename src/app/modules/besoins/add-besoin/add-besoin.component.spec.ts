import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBesoinComponent } from './add-besoin.component';

describe('AddBesoinComponent', () => {
  let component: AddBesoinComponent;
  let fixture: ComponentFixture<AddBesoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBesoinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBesoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
