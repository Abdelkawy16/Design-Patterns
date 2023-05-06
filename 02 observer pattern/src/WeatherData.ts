// this is the subject

import { Observer } from "./interfaces/Observer";
import { Subject } from "./interfaces/Subject";

export class WeatherData implements Subject {
  private Observers: Observer[] = [];
  private temp: number;
  private humidity: number;
  private pressure: number;

  registerObserver(observer: Observer): void {
    this.Observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    this.Observers = this.Observers.filter((o) => observer !== o);
  }

  notifyObservers(): void {
    for (const observer of this.Observers) {
      observer.update(this.temp, this.humidity, this.pressure);
    }
  }

  // other methods
  public measurementChanged(): void {
    this.notifyObservers();
  }

  public setMeasurements(
    _temp: number,
    _humidity: number,
    _pressure: number
  ): void {
    this.temp = _temp;
    this.humidity = _humidity;
    this.pressure = _pressure;
  }
}
