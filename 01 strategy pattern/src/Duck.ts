import { FlyBehavior } from "./fly behavior/FlyBehavior";
import { QuackBehavior } from "./quack behvior/QuackBehvior";

export class Duck
{
    private FlyBehavior: FlyBehavior;
    private QuackBehavior: QuackBehavior;

    constructor(flyBehavior: FlyBehavior, quackBehavior: QuackBehavior){
        this.FlyBehavior = flyBehavior;
        this.QuackBehavior = quackBehavior;
    }

    public setFlyBehavior(flyBehavior: FlyBehavior): void {
        this.FlyBehavior = flyBehavior;
    }

    public setQuackBehavior(quackBehavior: QuackBehavior): void {
        this.QuackBehavior = quackBehavior;
    }

    public performFly(): void {
        this.FlyBehavior.fly();
    }

    public performQuack(): void {
        this.QuackBehavior.quack();
    }
}