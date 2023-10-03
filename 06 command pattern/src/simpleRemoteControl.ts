import { command } from "./commands/command";

export class simpleRemoteControl{
    slot:command;

    setCommand(_command:command){
        this.slot = _command;
    }

    onButtonWasPressed(){
        this.slot.excute();
    }
    offButtonWasPressed(){
        this.slot.unexcute();
    }

}