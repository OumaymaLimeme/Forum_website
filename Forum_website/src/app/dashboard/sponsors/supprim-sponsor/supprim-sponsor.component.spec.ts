import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimSponsorComponent } from './supprim-sponsor.component';

describe('SupprimSponsorComponent', () => {
  let component: SupprimSponsorComponent;
  let fixture: ComponentFixture<SupprimSponsorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimSponsorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
