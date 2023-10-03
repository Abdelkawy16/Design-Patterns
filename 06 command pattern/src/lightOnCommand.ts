import { command } from "./command";
import { light } from "./light";

export class lightOnCommand implements command{
    light:light;
    
    constructor(_light:light) {
        this.light = _light;
    }

    excute(): void {
        this.light.on();
    }

}