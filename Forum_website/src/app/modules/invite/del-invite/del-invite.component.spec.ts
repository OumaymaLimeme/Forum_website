import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelInviteComponent } from './del-invite.component';

describe('DelInviteComponent', () => {
  let component: DelInviteComponent;
  let fixture: ComponentFixture<DelInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelInviteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
