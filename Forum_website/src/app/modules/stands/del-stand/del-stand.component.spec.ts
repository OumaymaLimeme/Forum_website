import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelStandComponent } from './del-stand.component';

describe('DelStandComponent', () => {
  let component: DelStandComponent;
  let fixture: ComponentFixture<DelStandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelStandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelStandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
