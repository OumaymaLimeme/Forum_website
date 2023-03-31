import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelEntrepComponent } from './del-entrep.component';

describe('DelEntrepComponent', () => {
  let component: DelEntrepComponent;
  let fixture: ComponentFixture<DelEntrepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelEntrepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelEntrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
