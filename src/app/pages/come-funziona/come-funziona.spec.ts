import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComeFunziona } from './come-funziona';

describe('ComeFunziona', () => {
  let component: ComeFunziona;
  let fixture: ComponentFixture<ComeFunziona>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComeFunziona]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComeFunziona);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
