import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprInviteComponent } from './suppr-invite.component';

describe('SupprInviteComponent', () => {
  let component: SupprInviteComponent;
  let fixture: ComponentFixture<SupprInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprInviteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
