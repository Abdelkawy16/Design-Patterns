export abstract class Beverage {
   description: string;
  abstract get Description(): string;
  abstract cost(): number;
}
