import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementsImagesComponent } from './measurements-images.component';

describe('MeasurementsImagesComponent', () => {
  let component: MeasurementsImagesComponent;
  let fixture: ComponentFixture<MeasurementsImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasurementsImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementsImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
