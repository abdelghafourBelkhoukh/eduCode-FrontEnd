import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamanComponent } from './examan.component';

describe('ExamanComponent', () => {
  let component: ExamanComponent;
  let fixture: ComponentFixture<ExamanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
