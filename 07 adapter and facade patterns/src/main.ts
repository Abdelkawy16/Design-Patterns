import { OldSystem } from "../adapter pattern/old-system";
import { ObjectAdapter, ClassAdapter } from "../adapter pattern/system-adapter";

function main() {
    // adapter pattern
    const oldsystem = new OldSystem();
    const objectAdapter = new ObjectAdapter(oldsystem);
    const data = objectAdapter.fetchData();
    
    const classAdapter = new ClassAdapter();
    const d = classAdapter.fetchData();
    
}

main();
