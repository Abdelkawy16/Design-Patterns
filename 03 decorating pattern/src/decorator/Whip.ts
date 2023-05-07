import { CondimentDecorator } from "./CondimentDecorator";

export class Whip extends CondimentDecorator{
    description: string;
    Beverage: CondimentDecorator;

    constructor(beverage: CondimentDecorator) {
        super();
        this.Beverage = beverage;
        this.description = beverage.Description + ", Whip";
    }

    get Description(): string {
        return this.description;
    }
    cost(): number {
        return this.Beverage.cost() + 0.10;
    }
}