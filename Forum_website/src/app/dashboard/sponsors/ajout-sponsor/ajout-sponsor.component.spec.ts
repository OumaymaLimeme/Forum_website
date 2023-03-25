import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutSponsorComponent } from './ajout-sponsor.component';

describe('AjoutSponsorComponent', () => {
  let component: AjoutSponsorComponent;
  let fixture: ComponentFixture<AjoutSponsorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutSponsorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
