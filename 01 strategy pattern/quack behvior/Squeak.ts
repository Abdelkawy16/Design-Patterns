import { QuackBehavior } from "./QuackBahvior";

export class Squeak implements QuackBehavior {
    quack(): void {
        console.log("Squeak!");
    }
}