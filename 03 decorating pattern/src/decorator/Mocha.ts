import { Beverage } from "../base/Beverage";
import { CondimentDecorator } from "./CondimentDecorator";

export class Mocha extends CondimentDecorator{
    description: string;
    Beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.Beverage = beverage;
        this.description = beverage.Description + ", Mocha";
    }

    get Description(): string {
        return this.description;
    }
    cost(): number {
        return this.Beverage.cost() + 0.20;
    }

}