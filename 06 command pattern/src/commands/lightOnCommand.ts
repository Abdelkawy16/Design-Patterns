import { command } from "./command";
import { light } from "../receivers/light";

export class lightCommand implements command{
    light:light;
    
    constructor(_light:light) {
        this.light = _light;
    }
    unexcute(): void {
        this.light.off();
    }

    excute(): void {
        this.light.on();
    }

}