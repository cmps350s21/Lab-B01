class CarShow{
    constructor(vehicles){
        this.vehicles = vehicles
    }
}

const truck1 = new Truck('Volvo YZ' , 12 , 2000)
const truck2 = new Truck('Volvo YZ' , 12 , 2000)
const truck3 = new Truck('Volvo YZ' , 12 , 2000)
const truck4 = new Truck('Volvo YZ' , 12 , 2000)
const bus1 = new Bus('Toyota HZ' , 8 , 45);
const bus2 = new Bus('Toyota HZ' , 8 , 45);
const bus3 = new Bus('Toyota HZ' , 8 , 45);
const bus4 = new Bus('Toyota HZ' , 8 , 45);

let vehicles = [truck1, bus1 , truck1, bus1 , truck1, bus1]
let carShow = new CarShow(vehicles);