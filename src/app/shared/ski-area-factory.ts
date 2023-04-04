import { SkiArea } from './ski-area';

export class SkiAreaFactory {

  static fromObject(rawSkiArea: any): SkiArea {
    let ret!: SkiArea;
    ret = new SkiArea(rawSkiArea.RID,
      rawSkiArea.Areaname,
      parseInt(rawSkiArea.SkiAreaSlopeKm),
      rawSkiArea.SkiMapUrl,
      rawSkiArea.Measuringpoints,
      rawSkiArea.WebcamUrl,
      parseInt(rawSkiArea.totalskilift),
      parseInt(rawSkiArea.openskilift),
      parseInt(rawSkiArea.totalskislopes),
      parseInt(rawSkiArea.openskislopes),
      parseInt(rawSkiArea.totaltracks),
      parseInt(rawSkiArea.opentracks),
      parseInt(rawSkiArea.totalslides),
      parseInt(rawSkiArea.opentslides),
      rawSkiArea.contactadress,
      rawSkiArea.contacttel,
      parseInt(rawSkiArea.contactcap),
      rawSkiArea.contactcity,
      rawSkiArea.contactweburl,
      rawSkiArea.contactmail,
      rawSkiArea.contactlogo,
      parseFloat(rawSkiArea.contactgpsnorth),
      parseFloat(rawSkiArea.contactgpseast)
      );
    return ret;
  }
}
