import { Singleton } from "./singleton";

function main() {
    const manager = Singleton.getInstance;
    manager.name = "Singleton";
    manager.DisplayName(); // Display Singleton
    Singleton.getInstance.DisplayName(); // Display Singleton
}

main();