import { command } from "./command";

export class simpleRemoteControl{
    slot:command;

    setCommand(_command:command){
        this.slot = _command;
    }

    buttonWasPressed(){
        this.slot.excute();
    }

}