import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenduFormateurComponent } from './rendu-formateur.component';

describe('RenduFormateurComponent', () => {
  let component: RenduFormateurComponent;
  let fixture: ComponentFixture<RenduFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenduFormateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenduFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
