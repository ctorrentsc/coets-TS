class Rocket{
    private _rocketCode: string;
    thrusters: Thruster[]=new Array();
    
    constructor(rocketCode:string){
        this._rocketCode = rocketCode;
    }

    get rocketCode(): string{
        return this._rocketCode;
    }

    
    
    addThruster(thruster:Thruster):void{
        this.thrusters.push(thruster);
    }
}
