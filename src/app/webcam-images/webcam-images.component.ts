import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeasurePoints } from '../shared/measurepoints';

@Component({
  selector: 'uz-webcam-images',
  templateUrl: './webcam-images.component.html',
  styleUrls: ['./webcam-images.component.scss']
})
export class WebcamImagesComponent implements OnInit {

  @Input() allWebcamURL!: String[];
  @Input() sortOrder!: String;
  sortMeasure: any = [];
  scrWidth: any = window.innerWidth;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sortMeasurements();
  }

  sortMeasurements() {
    for(let webcam of this.allWebcamURL) {
      this.sortMeasure.push(webcam);
    }
  }

  @HostListener('window:resize', ['$event'])
    getScreenSize(event?: any) {
          this.scrWidth = window.innerWidth;
    }

}
