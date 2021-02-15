const {expect} = require('chai')
const Bus = require('../model/bus')

describe('Test cases for Bus Class',()=>{
    it('Insurance of busses with engine V8 or above should be 1500', ()=>{
        let bus = new Bus('MC 1900' , 8 , 400)
        expect(bus.getInsurance()).greaterThan(999)
        expect(bus).to.have.property('model')
    })
    it('Insurance busses below V8 engine  should be 1000', ()=>{
        let bus = new Bus('MC 1900' , 5 , 400)
        expect(bus.getInsurance()).equal(1000)
    })
    it('Insurance busses below V4 bus should be 400', ()=>{
        let bus = new Bus('MC 1900' , 2 , 400)
        expect(bus.getInsurance()).equal(400)
    })
})