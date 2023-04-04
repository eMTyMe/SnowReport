import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcamImagesComponent } from './webcam-images.component';

describe('MeasurementsImagesComponent', () => {
  let component: WebcamImagesComponent;
  let fixture: ComponentFixture<WebcamImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebcamImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebcamImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
