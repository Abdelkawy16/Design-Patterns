import { garageDoor } from "./receivers/garageDoor";
import { garageDoorOpenCommand } from "./commands/garageDoorOpenCommand";
import { light } from "./receivers/light";
import { lightOnCommand } from "./commands/lightOnCommand";
import { simpleRemoteControl } from "./simpleRemoteControl";

function main() {
    const _light = new light();
    const remoteControl = new simpleRemoteControl();
    remoteControl.setCommand(new lightOnCommand(_light));
    remoteControl.buttonWasPressed();
    const _garageDoor = new garageDoor();
    remoteControl.setCommand(new garageDoorOpenCommand(_garageDoor));
    remoteControl.buttonWasPressed();
}

main();