import { Beverage } from "./Beverage";

export class DarkRoast extends Beverage{
    description: string;

    constructor() {
        super();
        this.description = "Dark Roast";
    }

    get Description(): string {
        return this.description;
    }
    cost(): number {
        return 0.99;
    }
}