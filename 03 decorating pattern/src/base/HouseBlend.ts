import { Beverage } from "./Beverage";

export class HouseBlend extends Beverage {
    description: string;
    
    constructor() {
        super();
        this.description = "House Blend Coffee";
    }
    
    get Description() {
        return this.description;
    }
    
    cost() {
        return .89;
    }
}