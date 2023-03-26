import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelSponsorComponent } from './del-sponsor.component';

describe('DelSponsorComponent', () => {
  let component: DelSponsorComponent;
  let fixture: ComponentFixture<DelSponsorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelSponsorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
