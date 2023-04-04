import { MeasurePoints } from "./measurepoints";

export class SkiArea {
  constructor(
    public id: string,
    public name: string,
    public totalKm: number,
    public skiMapURL: string,
    public measurePoints: Array<MeasurePoints>,
    public webcamURLs: Array<string>,
    public totalSkiLift: number,
    public openSkiLift: number,
    public totalSkiSlopes: number,
    public openSkiSlopes: number,
    public totalTracks: number,
    public openTracks: number,
    public totalSlides: number,
    public openSlides: number,
    public contactAdress: string,
    public contactTel: string,
    public contactPLZ: number,
    public contactCity: string,
    public contactWebURL: string,
    public contactMail: string,
    public contactLogoURL: string,
    public longitude: number,
    public latitude: number,
  ){}
}
