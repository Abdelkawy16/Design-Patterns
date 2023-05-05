import { QuackBehavior } from "./QuackBehvior";

export class Squeak implements QuackBehavior {
    quack(): void {
        console.log("Squeak!");
    }
}