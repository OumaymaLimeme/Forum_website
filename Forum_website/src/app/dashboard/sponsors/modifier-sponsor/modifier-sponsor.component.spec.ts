import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierSponsorComponent } from './modifier-sponsor.component';

describe('ModifierSponsorComponent', () => {
  let component: ModifierSponsorComponent;
  let fixture: ComponentFixture<ModifierSponsorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierSponsorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
