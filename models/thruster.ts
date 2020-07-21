class Thruster{
    public _power:number;

    constructor(power:number){
        this._power=power;
    }

    get power(): number{
        return this._power;
    }

    set power(power){
        this._power = power;
    }
        

}