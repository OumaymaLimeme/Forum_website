import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierInviteComponent } from './modifier-invite.component';

describe('ModifierInviteComponent', () => {
  let component: ModifierInviteComponent;
  let fixture: ComponentFixture<ModifierInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierInviteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
