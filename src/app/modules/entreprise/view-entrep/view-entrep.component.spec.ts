import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEntrepComponent } from './view-entrep.component';

describe('ViewEntrepComponent', () => {
  let component: ViewEntrepComponent;
  let fixture: ComponentFixture<ViewEntrepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEntrepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEntrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
