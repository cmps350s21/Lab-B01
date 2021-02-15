const Vehicle = require('./Vehicle')

class Bus extends Vehicle{
    constructor(model, engine , capacity){
        super(model, engine)
        this.capacity = capacity
    }
}
module.exports = Bus