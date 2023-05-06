import { CurrentConditionsDisplay } from "./CurrentConditionsDisplay";
import { WeatherData } from "./WeatherData";

function main(){
    const weatherData = new WeatherData();
    const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
    weatherData.setMeasurements(80, 65, 30.4);
    weatherData.notifyObservers();
    weatherData.setMeasurements(82, 70, 29.2);
    weatherData.notifyObservers();
    weatherData.setMeasurements(78, 90, 29.2);
    weatherData.notifyObservers();
}

main();