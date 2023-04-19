import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

import { map } from 'rxjs/operators';
import { SkiAreaFactory } from './ski-area-factory';
import { SkiArea } from './ski-area';

const API = 'https://tourism.opendatahub.com/v1/Weather/SnowReport?lang=de';

@Injectable()
export class SkiService {

  private skiAreas!: SkiArea[];

  constructor(private http: HttpClient) { }

  /**
   * Um den Netzwerkverkehr zu minimieren, werden vom Service die Stationen nur einmal über das
   * Internet geladen
   */
  getAll(sortOrder: string): Observable<SkiArea[]> {
    if (this.skiAreas != null) {
      return new Observable((observer: Observer<SkiArea[]>) => {
        // Es wird eine Kopie der originalen Stationsliste angelegt und diese Kopie dann sortiert.
        // Eine Kopie wird deshalb erstellt, damit im Template die Liste dann aktualisiert wird.
        // Würde dieselbe Liste - zwar sortiert - zurück geliefert, würde diese im Template nicht
        // aktualisiert
        const stations = this.sort(Object.assign([], this.skiAreas), sortOrder);
        observer.next(stations);
        observer.complete();
      });
    } else {
      return this.http.get<any>(API)
        // Webservice liefert ein Json-Objekt mit dem Namen rows zurück in dem das Array
        // gespeichert ist
        .pipe(
          map(rawSkiArea => rawSkiArea.map((rawSkiArea: any) => SkiAreaFactory.fromObject(rawSkiArea))),
          map(stations => this.skiAreas = this.sort(stations, sortOrder)));
    }
  }

  private sort(skiAreas: SkiArea[], sortOrder: string): SkiArea[] {
    switch (sortOrder) {
      case 'name': {
        return skiAreas.sort((a1, a2) => a1.name.localeCompare(a2.name));
      }
      case 'totalkm': {
        return skiAreas.sort((a1, a2) =>
          a1.totalKm == a2.totalKm ? 0 : a2.totalKm - a1.totalKm);
      }
      case 'totalslopes': {
        return skiAreas.sort((a1, a2) =>
          a1.totalSkiSlopes == a2.totalSkiSlopes ? 0 : a2.totalSkiSlopes - a1.totalSkiSlopes);
      }
      case 'totaltracks': {
        return skiAreas.sort((a1, a2) =>
          a1.totalTracks == a2.totalTracks ? 0 : a2.totalTracks - a1.totalTracks);
      }
      case 'totalslides': {
        return skiAreas.sort((a1, a2) =>
          a1.totalSlides == a2.totalSlides ? 0 : a2.totalSlides - a1.totalSlides);
      }
      default: {
        return skiAreas;
      }
    }
  }

  get(id: string): Observable<SkiArea>{
    return this.getAll("name").pipe(
      map(skiAreas => skiAreas.find(area => area.id === id)!)
    );
  }

  getByName(name: string): Observable<SkiArea>{
    console.log(name);
    return this.getAll("name").pipe(
      map(skiAreas => skiAreas.find(area => area.name.includes(name))!)
    );
  }

  getSkiAreas(searchTerm: string) {
    return this.getAll("name").pipe(
      map(skiAreas => skiAreas.filter(area => area.name.toLowerCase().includes(searchTerm.toLowerCase())))
    );
  }
}
