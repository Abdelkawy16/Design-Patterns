import { Pizza } from "./interfaces/Pizza";

export abstract class PizzaStore {
  _pizza: Pizza;
  constructor() {
    
  }
  public orderPizza(type: string):Pizza {
    debugger;
    const pizza = this.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }

  protected abstract createPizza(type: string): Pizza;
}