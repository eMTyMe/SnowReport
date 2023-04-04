import { Component, Input, OnInit } from '@angular/core';
import { Measurement } from '../shared/measurement';
import { ActivatedRoute } from '@angular/router';
import { MeasurePoints } from '../shared/measurepoints';

@Component({
  selector: 'uz-measurements-images',
  templateUrl: './measurements-images.component.html',
  styleUrls: ['./measurements-images.component.scss']
})
export class MeasurementsImagesComponent implements OnInit {

  @Input() allWebcamURL!: String[];
  @Input() sortOrder!: String;
  sortMeasure: any = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sortMeasurements();
  }

  sortMeasurements() {
    for(let webcam of this.allWebcamURL) {
      this.sortMeasure.push(webcam);
    }
  }

}
