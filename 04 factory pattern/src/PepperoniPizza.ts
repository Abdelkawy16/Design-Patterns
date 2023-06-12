import { Pizza } from "./interfaces/Pizza";

export class PepperoniPizza implements Pizza{
    name: string;
    toppings: string[];

    constructor() {
        this.name = "Pepperoni Pizza";
        this.toppings = ["Pepperoni"];
    }
    prepare() {
        console.log("Preparing " + name);
        console.log("Tossing dough...");
        console.log("Adding sauce...");
        console.log("Adding toppings: ");
        for (const topping of this.toppings) {
          console.log(" " + topping);
        }
      }
      bake() {
        console.log("Bake for 25 minutes at 350.");
      }
      cut() {
        console.log("Cutting the pizza into diagonal slices.");
      }
      box() {
        console.log("Place pizza in official PizzaStore box.");
      }

}