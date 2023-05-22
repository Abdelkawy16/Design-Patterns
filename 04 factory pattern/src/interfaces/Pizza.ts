export interface Pizza {
  name: string;
  toppings: string[];
  prepare();
  bake();
  cut();
  box();
}
