import { garageDoor } from "./receivers/garageDoor";
import { garageDoorCommand } from "./commands/garageDoorOpenCommand";
import { light } from "./receivers/light";
import { lightCommand } from "./commands/lightOnCommand";
import { simpleRemoteControl } from "./simpleRemoteControl";

function main() {
    const _light = new light();
    const remoteControl = new simpleRemoteControl();
    remoteControl.setCommand(new lightCommand(_light));
    remoteControl.onButtonWasPressed();
    const _garageDoor = new garageDoor();
    remoteControl.setCommand(new garageDoorCommand(_garageDoor));
    remoteControl.onButtonWasPressed();
    remoteControl.offButtonWasPressed();
}

main();