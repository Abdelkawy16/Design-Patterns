import { Pizza } from "./interfaces/Pizza";
import { CheesePizza } from "./CheesePizza";
import { PepperoniPizza } from "./PepperoniPizza";
import { VeggiePizza } from "./VeggiePizza";
import { PizzaStore } from "./PizzaStore";

export class NYPizzaStore extends PizzaStore {

  constructor() {
    super();
  }
  override createPizza(type: string): Pizza {
    switch (type) {
      case "cheese":
        this._pizza = new CheesePizza();
        break;
      case "pepperoni":
        this._pizza = new PepperoniPizza();
        break;
      case "veggie":
        this._pizza = new VeggiePizza();
        break;
      default:
        this._pizza = new CheesePizza();
        break;
    }
    return this._pizza;
  }
}
