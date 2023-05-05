import { QuackBehavior } from "./QuackBehvior";

export class Quack implements QuackBehavior {
    quack(): void {
        console.log("Quack!");
    }
}