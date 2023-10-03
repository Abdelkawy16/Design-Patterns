import { light } from "./light";
import { lightOnCommand } from "./lightOnCommand";
import { simpleRemoteControl } from "./simpleRemoteControl";

function main() {
    console.log("hi")
    const _light = new light();
    const remoteControl = new simpleRemoteControl();
    remoteControl.setCommand(new lightOnCommand(_light));
    remoteControl.buttonWasPressed();
}

main();