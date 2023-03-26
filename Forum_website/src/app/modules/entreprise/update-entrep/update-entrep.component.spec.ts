import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEntrepComponent } from './update-entrep.component';

describe('UpdateEntrepComponent', () => {
  let component: UpdateEntrepComponent;
  let fixture: ComponentFixture<UpdateEntrepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEntrepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEntrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
