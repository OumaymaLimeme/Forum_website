import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInviteComponent } from './add-invite.component';

describe('AddInviteComponent', () => {
  let component: AddInviteComponent;
  let fixture: ComponentFixture<AddInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInviteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
