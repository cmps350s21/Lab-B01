const Truck = require("./model/Truck");
const Bus = require("./model/Bus");
//import

const truck = new Truck('Volvo YZ', 12, 2000)
const bus = new Bus('Toyota HZ', 8, 45);

console.log(truck)
console.log(bus)

console.log(`
  Truck Info
    Model is ${truck.model}
    Engine is ${truck.engine}
    Load is ${truck.load},
    Insurance is ${truck.getInsurance()}
`)


let colors = ["white", "blue", "yellow", "black", "red", "green"]
let [a, b, ...c] = colors

let objects = {one: 1, two: 2, three: 3, add: (x, y) => x + y}

let {one, two} = objects

console.log(one, two)

let points = {

    y: 2111,
    z: 5,
    a: 4,
    t: 4,
    x: 1111,
}

function draw({x, y}) {
    console.log(x, y)
}

draw(points)
















