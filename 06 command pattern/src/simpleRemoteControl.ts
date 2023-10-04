import { command } from "./commands/command";

export class simpleRemoteControl {
    slot: command;

    undoList: { cmd: command, executed: boolean }[] = [];
    redoList: { cmd: command, executed: boolean }[] = [];

    setCommand(_command: command) {
        this.slot = _command;
    }

    onButtonWasPressed() {
        this.slot.excute();
        this.undoList.push({ cmd: this.slot, executed: true })
    }

    offButtonWasPressed() {
        this.slot.unexcute();
        this.undoList.push({ cmd: this.slot, executed: false })
    }

    undo() {
        if (this.undoList.length) {
            const action = this.undoList.pop();
            if (action.executed) {
                action.cmd.unexcute();
                this.redoList.push({cmd:action.cmd, executed:false});
            }
            else {
                action.cmd.excute();
                this.redoList.push({cmd:action.cmd, executed:true});
            }
        }
    }

    redo() {
        if (this.redoList.length) {
            const action = this.redoList.pop();
            if (action.executed) {
                action.cmd.unexcute();
                this.undoList.push({cmd:action.cmd, executed:false});
            }
            else {
                action.cmd.excute();
                this.undoList.push({cmd:action.cmd, executed:true});
            }
        }
    }

}