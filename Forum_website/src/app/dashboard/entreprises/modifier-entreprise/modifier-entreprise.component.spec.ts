import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierEntrepriseComponent } from './modifier-entreprise.component';

describe('ModifierEntrepriseComponent', () => {
  let component: ModifierEntrepriseComponent;
  let fixture: ComponentFixture<ModifierEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierEntrepriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
