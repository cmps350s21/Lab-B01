class Vehicle{
    //properties /attributes
    constructor(model, engine){
        this.model = model
        this.engine = engine
    }
    getInsurance() {
        if (this.engine > 6) return 1500
        else if (this.engine > 4) return 1000
        else return 400
    }
}
module.exports = Vehicle