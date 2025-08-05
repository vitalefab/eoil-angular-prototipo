import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Offerte } from './offerte';

describe('Offerte', () => {
  let component: Offerte;
  let fixture: ComponentFixture<Offerte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Offerte]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Offerte);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
