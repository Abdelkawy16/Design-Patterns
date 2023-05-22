import { Pizza } from "./interfaces/Pizza";

export class PepperoniPizza implements Pizza{
    name: string;
    toppings: string[];

    constructor() {
        this.name = "Pepperoni Pizza";
        this.toppings = ["Pepperoni"];
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