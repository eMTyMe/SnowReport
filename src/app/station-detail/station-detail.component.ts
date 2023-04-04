import { ActivatedRoute } from '@angular/router';
import { WeatherService } from './../shared/weather-service';
import { Component, HostListener, OnInit } from '@angular/core';
import { Station } from '../shared/station';
import { SkiArea } from '../shared/ski-area';

interface measurements {
  description: string;
  value: number;
}
@Component({
  selector: 'uz-station-detail',
  templateUrl: './station-detail.component.html',
  styleUrls: ['./station-detail.component.scss']
})
export class StationDetailComponent implements OnInit {

  scrWidth: any = window.innerWidth;
  station!: SkiArea;
  lastUpdatedFormatted!: string;
  stationLoaded!: Promise<boolean>;
  measurements!: measurements[];
  displayedColumns = ['description', 'value'];
  sortOrder!: string;

  formatter: any = new Intl.DateTimeFormat("de", {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  });

  constructor(private ws: WeatherService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.sortOrder = params.sortOrder;
      this.ws.get(params.code).subscribe(station=>{
        this.station=station
        this.stationLoaded = Promise.resolve(true);
        this.setUpMeasurements();
      })});
  }

  @HostListener('window:resize', ['$event'])
    getScreenSize(event?: any) {
          this.scrWidth = window.innerWidth;
    }

  setUpMeasurements() {
    this.measurements = [
      { description: 'Gesamt Ski Lifts' , value: this.station.totalSkiLift},
      { description: 'Offene Ski Lifts' , value: this.station.openSkiLift},
      { description: 'Gesamt Skipisten' , value: this.station.totalSkiSlopes},
      { description: 'Offene Skipisten' , value: this.station.openSkiSlopes},
      { description: 'Gesamt Strecken' , value: this.station.totalTracks},
      { description: 'Offene Strecken' , value: this.station.openTracks},
      { description: 'Gesamt Schlittenbahnen' , value: this.station.totalSlides},
      { description: 'Offene Schlittenbahnen' , value: this.station.openSlides},
      ];
  }

}
