import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInviteComponent } from './update-invite.component';

describe('UpdateInviteComponent', () => {
  let component: UpdateInviteComponent;
  let fixture: ComponentFixture<UpdateInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInviteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
