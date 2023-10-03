import { garageDoor } from "./garageDoor";
import { garageDoorOpenCommand } from "./garageDoorOpenCommand";
import { light } from "./light";
import { lightOnCommand } from "./lightOnCommand";
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