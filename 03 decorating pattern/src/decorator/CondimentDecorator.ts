import { Beverage } from "../base/Beverage";

export abstract class CondimentDecorator extends Beverage {
    description: string;
    abstract get Description(): string;
}