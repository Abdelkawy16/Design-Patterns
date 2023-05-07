import { Beverage } from "./Beverage";

export class Espresso extends Beverage{
    description: string;
    
    constructor() {
        super();
        this.description = "Espresso";
    }
    
    get Description(): string {
        return this.description;
    }
    
    cost(): number {
        return 1.99;
    }
}