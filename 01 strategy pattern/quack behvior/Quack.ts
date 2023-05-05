import { QuackBehavior } from "./QuackBahvior";

export class Quack implements QuackBehavior {
    quack(): void {
        console.log("Quack!");
    }
}