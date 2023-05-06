import { DisplayElement } from "./interfaces/DisplayElememt";
import { Observer } from "./interfaces/Observer";
import { Subject } from "./interfaces/Subject";

export class CurrentConditionsDisplay implements DisplayElement, Observer{
    private temperature:number;
    private humidity:number;
    private weatherData:Subject;

    constructor(weatherData:Subject) {
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
    }

    public update(temp: number, humidity: number, pressure: number): void {
        this.temperature = temp;
        this.humidity = humidity;
        this.display();
    }
    
    public display(): void {
        console.log(`Current conditions: ${this.temperature} degrees and ${this.humidity} humidity`);
    }

}