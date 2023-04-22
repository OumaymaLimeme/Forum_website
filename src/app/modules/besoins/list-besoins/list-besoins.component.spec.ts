import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBesoinsComponent } from './list-besoins.component';

describe('ListBesoinsComponent', () => {
  let component: ListBesoinsComponent;
  let fixture: ComponentFixture<ListBesoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBesoinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBesoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
