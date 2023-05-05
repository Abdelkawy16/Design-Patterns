import { Duck } from "./Duck";
import { FlyNoWay } from "./fly behavior/FlyNoWay";
import { Quack } from "./quack behvior/Quack";

export class ModelDuck extends Duck{
    constructor(){
        super(new FlyNoWay(), new Quack());
    }

    public display(): void {
        console.log("I'm a model duck");
    }
}