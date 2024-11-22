import { INewSystem } from "./new-system";
import { OldSystem } from "./old-system";

// Adapter class to convert the old system to the new system's expected interface
// implementing the interface of the type we're adapting to.
export class ObjectAdapter implements INewSystem {
  oldsystem: OldSystem;
  // getting the reference to the object we are adapting.
  constructor(oldsystem: OldSystem) {
    this.oldsystem = oldsystem;
  }
    fetchData(): string {
        // Translate the old system's method to the new system's expected method
        return this.oldsystem.getLegacyData();
    }
}

// Class Adapter using inheritance
export class ClassAdapter extends OldSystem implements INewSystem {
  fetchData(): string {
    return this.getLegacyData(); // Reuse inherited method
  }
}