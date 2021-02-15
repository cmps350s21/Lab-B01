const Vehicle = require("./Vehicle");

class Truck extends Vehicle{
    constructor(model, engine , load){
        super(model, engine)
        this.load = load
    }
}
module.exports = Truck