import { Observer } from "./interfaces/Observer";
import { Subject } from "./interfaces/Subject";

export class ConcreteSubjector implements Subject{

    private Observers: Observer[] = [];

    registerObserver(observer: Observer): void {
        this.Observers.push(observer);
    }
    
    removeObserver(observer: Observer): void {
        this.Observers = this.Observers.filter(o => observer!== o);
    }

    notifyObservers(): void {
        for (let observer of this.Observers) {
            //observer.update("obj");
        }
    }
    

}