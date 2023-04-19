import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { SkiService } from '../shared/ski-service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTable } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { SkiArea } from '../shared/ski-area';

@Component({
  selector: 'uz-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.scss']
})
export class StationListComponent implements OnInit {

  stations!: SkiArea[];
  scrWidth: any = window.innerWidth;
  displayedColumns = ['namen', 'totalkm', 'totalslopes', 'totaltracks'];
  sortOrder: string = "";
  myControl = new FormControl('');
  searchedOptions: Array<string> = [];
  searchTerm: string = "";
  options: Array<string> = [];

  constructor(private ss: SkiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ss.getAll(params.sortOrder).subscribe(stations=> {this.stations=stations; this.setOptions(stations);});
      this.sortOrder = params.sortOrder;
    })
  }

  @HostListener('window:resize', ['$event'])
    getScreenSize(event?: any) {
          this.scrWidth = window.innerWidth;
    }

  setOptions(stations: SkiArea[]) {
    this.options = [];
    for(let station of stations)
      this.options.push(station.name);
  }

  searchTermChange(searchTerm: string) {
    this.ss.getSkiAreas(searchTerm).subscribe(foundStations => this.setOptions(foundStations))
  }


  navigateTo(stationName: string) {
    let url: string = '/station/';
    let id: string = "";
    url = url.concat(this.sortOrder + '/');
    this.ss.getByName(stationName).subscribe(station => id = station.id);
    url = url.concat(id);
    this.router.navigate([url]);
  }
}
