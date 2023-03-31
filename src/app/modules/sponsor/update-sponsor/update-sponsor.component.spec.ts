import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSponsorComponent } from './update-sponsor.component';

describe('UpdateSponsorComponent', () => {
  let component: UpdateSponsorComponent;
  let fixture: ComponentFixture<UpdateSponsorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSponsorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
