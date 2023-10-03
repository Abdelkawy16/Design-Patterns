import { command } from "./command";
import { garageDoor } from "../receivers/garageDoor";

export class garageDoorCommand implements command{
    garageDoor:garageDoor;

    constructor(_garageDoor:garageDoor) {
        this.garageDoor = _garageDoor;
    }

    unexcute(): void {
        this.garageDoor.down();
    }

    excute(): void {
        this.garageDoor.up();
    }

}