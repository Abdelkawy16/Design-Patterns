import { Pizza } from "./interfaces/Pizza";

export class CheesePizza implements Pizza{
    name: string;
    toppings: string[];
    
    constructor() {
        this.name = "Cheese Pizza";
        this.toppings = ["Cheese"];
    }
    
    prepare() {
        throw new Error("Method not implemented.");
    }
    bake() {
        throw new Error("Method not implemented.");
    }
    cut() {
        throw new Error("Method not implemented.");
    }
    box() {
        throw new Error("Method not implemented.");
    }

}