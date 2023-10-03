import { command } from "./command";
import { garageDoor } from "../receivers/garageDoor";

export class garageDoorOpenCommand implements command{
    garageDoor:garageDoor;

    constructor(_garageDoor:garageDoor) {
        this.garageDoor = _garageDoor;
    }


    excute(): void {
        this.garageDoor.up();
    }

}