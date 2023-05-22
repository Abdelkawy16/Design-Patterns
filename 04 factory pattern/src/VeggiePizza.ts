import { Pizza } from "./interfaces/Pizza";

export class VeggiePizza implements Pizza {
    name: string;
    toppings: string[];

    constructor() {
        this.name = "Veggie Pizza";
        this.toppings = ["Veggie"];
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