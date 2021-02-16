const {expect} = require('chai')
const Bus = require('../model/bus')
let bus;
describe('Test cases for Bus Class',()=>{
    before(()=>{
        bus = new Bus('MC 1900' , 8 , 400)
        console.log("I am starting to run the test cases")
    })
    beforeEach(() => {
        //call the server get data
        console.log("I am  running before each test cases")
    })
    afterEach(() => {

    })
    after(()=>{
        console.log("I am done running all the test cases")
    })
    it('Insurance of busses with engine V8 or above should be 1500', ()=>{
        bus.engine = 8
        expect(bus.getInsurance()).greaterThan(999)
        expect(bus).to.have.property('model')
    })
    it('Insurance busses below V8 engine  should be 1000', ()=>{
        bus.engine = 6
        expect(bus.getInsurance()).equal(1000)
    })
    it('Insurance busses below V4 bus should be 400', ()=>{
        bus.engine = 3
        expect(bus.getInsurance()).equal(400)
    })
})