import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimEntrepriseComponent } from './supprim-entreprise.component';

describe('SupprimEntrepriseComponent', () => {
  let component: SupprimEntrepriseComponent;
  let fixture: ComponentFixture<SupprimEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimEntrepriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
