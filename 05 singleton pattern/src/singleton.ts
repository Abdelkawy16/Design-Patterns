export class Singleton{
    name:string;
    
    //private static _instanse:Singleton;
    
    private constructor() {}
    
    // public static get getInstance() : Singleton {
    //     if(this._instanse == null)
    //         this._instanse = new Singleton();
    //     return this._instanse;
    // }
    
    // Move to an eagerly created instance rather than a lazily created one (to improve multithreading performance)
    private static _instanse:Singleton = new Singleton();

    public static get getInstance() : Singleton {
        return this._instanse;
    }

    public DisplayName() :void {
        console.log(this.name)
    }
}