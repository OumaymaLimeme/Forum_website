import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutInviteComponent } from './ajout-invite.component';

describe('AjoutInviteComponent', () => {
  let component: AjoutInviteComponent;
  let fixture: ComponentFixture<AjoutInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutInviteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
