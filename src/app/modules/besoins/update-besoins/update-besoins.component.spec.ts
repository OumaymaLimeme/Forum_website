import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBesoinsComponent } from './update-besoins.component';

describe('UpdateBesoinsComponent', () => {
  let component: UpdateBesoinsComponent;
  let fixture: ComponentFixture<UpdateBesoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBesoinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBesoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
