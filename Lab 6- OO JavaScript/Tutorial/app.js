const Truck = require("./model/Truck");
const Bus = require("./model/Bus");

const truck = new Truck('Volvo YZ' , 12 , 2000)
const bus = new Bus('Toyota HZ' , 8 , 45);

console.log(truck)
console.log(bus)

console.log(`
    Truck Info
    Model is ${truck.model}
    Engine is ${truck.engine}
    Load is ${truck.load},
    Insurance is ${truck.getInsurance()}
`)


















